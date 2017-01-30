---
title: Polymorphic Relationships with Ember Data
date: 2017-01-30 06:04:32
tags:
---

_Note: this is a post of what might [eventually land](https://github.com/emberjs/guides/pull/1797) in the Ember documentation. Until then, enjoy._

Polymorphism is a powerful concept which allows a developer to abstract common functionality into a base class. Consider the following example: a user with multiple payment methods. They could have a linked Paypal account, and a couple credit cards on file.

Note that, for polymorphism to work, Ember Data expects a "type" declaration polymorphic type via the reserved `type` property on the model. Confused? See the API response below.

First, let's look at the model definitions:

```js
/* app/models/user.js */
import DS from 'ember-data';
let { hasMany } = DS;

export default DS.Model.extend({
  paymentMethods: hasMany('payment-method', { polymorphic: true })
});
```

```js
/* app/models/payment-method.js */
import DS from 'ember-data';
let { belongsTo } = DS;

export default DS.Model.extend({
  user: belongsTo('user', { inverse: 'paymentMethods' }),
});
```

```js
/* app/models/payment-method-cc.js */
import PaymentMethod from './payment-method'
import DS from 'ember-data';
import Ember from 'ember';
let { attr } = DS;
let { computed } = Ember;

export default DS.Model.extend({
  obfuscatedIdentifier: computed('last4', function () {
    return `**** **** **** ${this.get('last4')}`
  })
});
```

```js
/* app/models/payment-method-paypal.js */
import PaymentMethod from './payment-method'
import DS from 'ember-data';
import Ember from 'ember';
let { attr } = DS;
let { computed } = Ember;

export default DS.Model.extend({
  linkedEmail: attr(),
  obfuscatedIdentifier: computed('linkedEmail', function () {
    const last5 = this.get('linkedEmail')
      .split('').reverse().slice(0, 5).reverse().join('');
    return `••••${last5}`
  })
});
```

And our API might setup these relationships like so:

```
"data":{
   "id":"8675309",
   "type":"user",
   "attributes":{
      "name":"Anfanie Farmeo"
   },
   "relationships":{
      "payment-methods":{
         "data":[
            { "id":1, "type":"PaymentMethodPaypal" },
            { "id":2, "type":"PaymentMethodCc" },
            { "id":3, "type":"PaymentMethodApplePay" }
         ]
      }
   }
},
"included":[
   {
      "id":1,
      "type":"PaymentMethodPaypal",
      "attributes":{
         "linked-email":"ryan@gosling.io",
      }
   },
   {
      "id":2,
      "type":"PaymentMethodCc",
      "attributes":{
         "last4":"1335"
      }
   },
   {
      "id":3,
      "type":"PaymentMethodCc",
      "attributes":{
         "last4":"5513"
      }
   },
]
```

I've created a [little repo](https://github.com/briangonzalez/ember-polymorphic) to play around with.
