---
title: Demystifying Redirection in Ember
date: 2016-05-08 08:40:13
tags:
---

As your Ember app becomes more complex with user authentication, tricky redirect rules, error substates, etc., you'll often find yourself reaching for Ember's `transitionTo` method, but this may not always be the right tool for the job.

Maybe you need to redirect a user away from the login page if they have it bookmarked but are already logged in, or redirect them to the login page if the try to access their account but are authenticated.

Or perhaps you're running an A/B test and don't want users in a certain test to see a certain page.

What if the user is trying to access the sign-up page and they're already signed up? We'll redirect them as well.

This article will attempt to shed light on the tools you have at your disposal in Ember

  - `transitionTo`
  - `intermediateTransitionTo`
  - `replaceWith`
  - `Transition#retry`

Let's start with this high-level breakdown of each approach, then we'll walk through a few scenarios where you'd use one over the other.

```

                             State Management  History Operation   Controller Equivalent
                             ----------------  -----------------   ---------------------
transitionTo	             Manual	           Push	               transitionToRoute
replaceWith	              Manual	        Replace	            replaceRoute
intermediateTransitionTo	 Manual	           None	               None
Transition#retry	         Auto	           Push	               n/a
```

## Scenario 1 - Redirecting away from an authenticated page

Take an unauthenticated user visiting `/account`, a route that requires user authentication. The desired UX is to kick them to `/login`, and once they login, to send them back to the account route:

```
// app/routes/account.js

beforeModel(transition) {
  transition.abort();
  this.replaceWith('login');
}

// app/routes/login.js

onLoginSuccess() {
  this.replaceWith('account');
}

```

The beauty of this approach is that the you don't break the user's back button as you send them to log in. If you blindly used `transitionTo`, the user's back button would likely break and they'd become trapped. No bueno.

## Scenario 1 - API failure

Let's say your API intermittently fails or times out. The desired UX is to show the user some sane error messaging, and perhaps tell them to refresh shortly (or refresh the browser on their behalf). `intermediateTransitionTo` is the right tool for the job here.

```
// app/routes/application.js

 actions: {
    error(error) {
      const errors = error.errors || [];

      const isTimedOut = errors.find((e) => typeof e.detail === 'string' &&
                         e.detail.search('timed out') !== -1);
      const isAPIDown = errors.find((e) => e.status === 423);

      if (isAPIDown || isTimedOut) {
        this.intermediateTransitionTo('application-error');
      }
    },
  }
```

Remember, `intermediateTransitionTo` does not modify the URL or the state of `window.history`. When the page is refreshed (or programmtically refreshes), the route the user intended to visit is preserved and will be reloaded.

## When to use `transitionTo`

One mistake I often see young Ember developers make is overusing `transitionTo`.

This bit of markup with a corresponding action in one's route:
```
<button \{\{ action 'transitionToAccount' \}\}>
  Take me to my account
</button>
```

...could be written more succinctly (no action!) as:
```
{{#link-to 'account' class='button'}}
  Take me to my account
{{/link-to}}
```

So my advice is to use `transitionTo` when you want your app to behave _as if_ the user had clicked on a link. But, don't use `transitionTo` when a simple `link-to` is more appropriate.

If you enjoyed this post, follow me on [Twitter](https://twitter.com/brianmgonzalez) as I'll be writing more on Ember over the coming months.
