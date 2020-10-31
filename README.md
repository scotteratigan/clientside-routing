# clientside-routing

An exploration of a custom implementation of a client-side routing system.

Through a series of branches, we will implement our own system of routing on the client side. After loading the initial index page, the URL is updated and content is replaced by clicking links, without re-loading the page. If you've ever wondered how libraries like react-router are possible, this is worth checking out.

## Instructions

1. Clone repository
```
git clone git@github.com:scotteratigan/clientside-routing.git
```
2. Check out the first step
```
`git checkout 1`
```
3. Serve content locally. I recommend VS Code's Live Share Extension: https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare for simplicity.

After viewing branch 1, continue on to 2, 3, 4, and 5.

-----

### Step 1 - Alter URL without re-loading page
#### Demonstrates history.pushState
```
git checkout 1
```
Or [view code on GitHub](https://github.com/scotteratigan/clientside-routing/tree/856d7ef40716e573af437bfcb0032bbc46f2f90a)

-----

### Step 2 - Pull the URL into the page
#### Demonstrates location.pathname
```
git checkout 2
```
Or [view code on GitHub](https://github.com/scotteratigan/clientside-routing/tree/b5d4749f85f65373ff5697c44fce997700c9c01e)

-----

### Step 3 - Override forward/back buttons
#### Demonstrates window.onpopstate
```
git checkout 3
```
Or [view code on GitHub](https://github.com/scotteratigan/clientside-routing/tree/479b318c15ba9a418f1f489ee03b05c81dfa538e)

-----

### Step 4 - Replace button with real links
#### Adds a data property to anchor tags and overrides the default click behavior to call our custom function instead
```
git checkout 4
```
Or [view code on GitHub](https://github.com/scotteratigan/clientside-routing/tree/873c64849aca21908d3aaa4bc7216d66f1cf9d40)

-----

### Step 5 - Page updates call a custom render function
#### Adds a router and render function for each component
```
git checkout 5
```
Or [view code on GitHub](https://github.com/scotteratigan/clientside-routing/tree/ad39e0a7d93187ec1885224c9e610c8a2264fe28)

