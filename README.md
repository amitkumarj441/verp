The VERP Explorer 
=================

The VERP (Visualization of Eye movements with Recurrence Plots) Explorer is a
visual analysis tool for exploring eye movements during visual-cognitive tasks.
The VERP Explorer couples several spatial eye-movement visualizations with
recurrence plots that reveal patterns of revisitation over time. 

Until we prepare a proper documentation, please refer to this
[draft](http://www.cs.stanford.edu/~cagatay/projects/verp/draft.pdf) for more
details.  

## Run 
+ The VERP Explorer is a web application. You can run a deployed copy from
  [here](http://www.cs.stanford.edu/~cagatay/projects/verp/). 

  * Two synthetic datasets, [data/lorenz](data/lorenz) and 
    [data/sin](data/sin), in the repo should help you jump start, particularly 
    if you're curious about recurrence plots. Also, check out this short
    [video](http://www.cs.stanford.edu/~cagatay/projects/verp/lorenz.mov).

+ The VERP Explorer is a research prototype and has been tested only on Chrome.    

## Build & Develop 

+ In order to build the VERP Explorer you need to have [node.js](nodejs.org)
  and [bower](bower.io) installed.

+ Once you have the above, get a local copy of the repo either by using `git clone` or downloading the
  zipped folder.

+ Then, to build, run `npm install` and  `bower install` from the project directory.  

+ Run `grunt serve` for preview. 

