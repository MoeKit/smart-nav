# Demo

---

## Normal usage

````iframe:600
<style>
    #box {
        width:900px;
        height:800px;
        background:red;
    }

    #footer {
        width:100%;
        height:500px;
        background:green;
    }

    #target {
        width:200px;
        height:250px;
        background:blue;
        position:fixed;
        top:100px;
        right:20px;
    }

</style>
<div id="box"></div>
<div id="footer"></div>

<div id="target">
    I am sidebar
</div>
<script>
seajs.use('index', function(smartNav) {
    new smartNav({
        target:'#target',
        column:'#box'
    });
});
</script>
````

## fix bottom 
````iframe:600
<style>
    #box {
        width:900px;
        height:800px;
        background:red;
    }

    #footer {
        width:100%;
        height:500px;
        background:green;
    }

    #target {
        width:200px;
        height:250px;
        background:blue;
        position:fixed;
        bottom:200px;
        right:20px;
    }

</style>
<div id="box"></div>
<div id="footer"></div>

<div id="target">
    I am sidebar
</div>
<script>
seajs.use('index', function(smartNav) {
    new smartNav({
        target:'#target',
        column:'#box'
    });
});
</script>
````

## 设置 columnOffset

````iframe:600
<style>
    #box {
        width:900px;
        height:800px;
        background:red;
        padding-bottom:100px;
    }

    #footer {
        width:100%;
        height:500px;
        background:green;
    }

    #target {
        width:200px;
        height:250px;
        background:blue;
        position:fixed;
        bottom:100px;
        right:20px;
    }

</style>
<div id="box"></div>
<div id="footer"></div>

<div id="target">
    I am sidebar
</div>
<script>
seajs.use('index', function(smartNav) {
    new smartNav({
        target:'#target',
        column:'#box',
        columnOffset:100
    });
});
</script>
````

## 设置 columnEdge
````iframe:600
<style>
    #box {
        width:900px;
        height:800px;
        background:red;
    }

    #footer {
        width:100%;
        height:500px;
        background:green;
    }

    #target {
        width:200px;
        height:250px;
        background:blue;
        position:fixed;
        top:100px;
        right:20px;
    }
    
    #target2 {
        width:200px;
        height:250px;
        background:blue;
        position:fixed;
        bottom:100px;
        left:0;
    }

</style>
<div id="box"></div>
<div id="footer"></div>

<div id="target">
    I am sidebar
</div>
<div id="target2">
    I am sidebar
</div>
<script>
seajs.use('index', function(smartNav) {
    new smartNav({
        target:'#target',
        column:'#footer',
        columnOffset:-15,
        columnEdge:'top'
    });
    
    new smartNav({
        target:'#target2',
        column:'#footer',
        columnOffset:-15,
        columnEdge:'top'
    });
    
});
</script>
````
