Notes recorded during reverse-engineering PXB horizontal grid layout:

Observed behaviour:
When any (last?) item reach 300px (or 160px/180px on small) height, insert new item
We can simplify this to be the first item, this way we don't have to manage complex event listeners

"insert new item" means shift all left by one (cross-collection) - and only when there is shortage, conjure a new one

We need to be able to calculate how many can we fit on init
- We can do this by iterating until predicate is met
- Or we can try to approach this mathematically by basing off tallest item
  - However we likely can't predict which items will be included and which won't, hence iterative approach is better
  - It's essentially a one-time chunking operation

Given pictures: A, B, C
Thresholds are:
T1 = (Aw + Bw).h < desiredHeight
T2 = (T1w + Cw).h > desiredHeight 
Therefore range is 
(∑(n.w)) WHERE its h < desiredHeight .. (∑(n+1.w)) WHERE its h <>desiredHeight

Heuristics:
Given set of pictures, if they were all exactly desiredHeight, would their total width be more than parent width?
If yes, then drop a picture and recalculate
if no, would total width left be enough to assign a new one?
  if yes, then add one and recalculate
  if no, then we are done

First do it on init
Then add a resize listener to window (can we listen to the parent directly?)

---

Or another way:
If ALL images in a given row reach above h1 height, then add new one
If ALL images in a given row reach below h2 height, then remove one

It's nice because we don't have to do expensive calculations - just a quick more-than less-than check
But... Is this prone to infinite loops?
Is all this coincidence? Is first approach much more safer?

