# Demo

---

## Normal usage

````iframe
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


````iframe
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
        column:'#box'
    });
});
</script>
````
