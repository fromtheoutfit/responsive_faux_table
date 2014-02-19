# Responsive Faux-table

A responsive table that’s not really a table, but it kind of looks like one!

Using elements that are easy to lay out in small environments (`<dl>`, `<dt>`, and `<dd>`), we can render simple table-like data without worring about space, then style those elements to *look* like a table once the width of the environment is roomy enough.

## Demo

[http://fromtheoutfit.github.io/responsive_faux_table/](http://fromtheoutfit.github.io/responsive_faux_table/)

## HTML

In [index.html](https://github.com/fromtheoutfit/responsive_faux_table/blob/master/index.html), you’ll see that each row of the faux-table is a simple `<dl>` element whose child `<dt>` and `<dd>` elements represent key/value pairs similar to those found in a table’s `th`/`td` pairing, like so:

```
<!-- Begin a single row -->
<dl>

    <dt>Field</dt>                  <!-- key   ("<th>") -->
    <dd>email</dd>                  <!-- value ("<td>") -->

    <dt>Description</dt>            <!-- key   ("<th>") -->
    <dd>Who made it happen?</dd>    <!-- value ("<td>") -->

    <dt>Data Type</dt>              <!-- key   ("<th>") -->
    <dd>email address</dd>          <!-- value ("<td>") -->

    <dt>Example(s)</dt>             <!-- key   ("<th>") -->
    <dd>someone@bigboard.us</dd>    <!-- value ("<td>") -->

    <dt>Required?</dt>              <!-- key   ("<th>") -->
    <dd>Y</dd>                      <!-- value ("<td>") -->

</dl>
<!-- End a single row -->
```

…and all of the `dl` elements are wrapped in a parent element with a class of `faux-table`; the css uses this class as a scoping mechanism to ensure that *other* `dl` elements in your project are not affected by this faux-table’y goodness.

## CSS

The [stylesheet](https://github.com/fromtheoutfit/responsive_faux_table/blob/master/styles.css) takes a mobile-first approach to *lightly* style the `<dl>`, `<dt>`, and `<dd>` elements, then, at [an easy-to-change viewport width](https://github.com/fromtheoutfit/responsive_faux_table/blob/master/styles.css#L35), it utilizes the [flexible box](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes) layout mode to nudge those elements into something that looks like a simple table. [Take a look at it](https://github.com/fromtheoutfit/responsive_faux_table/blob/master/styles.css)—it’s packed with comments that explain how it works.

## JavaScript

The [JavaScript](https://github.com/fromtheoutfit/responsive_faux_table/blob/master/detect-flex.js) attempts to detect support for `display:-webkit-flex;` and/or `display:flex;` and, if support *is* detected, it appends a class of `flexbox` to the `html` element. Like the stylesheet, [it’s](https://github.com/fromtheoutfit/responsive_faux_table/blob/master/detect-flex.js) packed with comments that explain how it works.

We then use this `flexbox` class as another scoping mechanism; only those environments that support the flexible box layout mode get the selectors that turn the `<dl>`, `<dt>`, and `<dd>` elements into a faux-table.

## Current Browser Support

* Internet Explorer 10 (partial)
* Internet Explorer 11
* Firefox 28+
* Chrome 21+
* Safari 6.1+
* Opera 12.1+
* Mobile Safari 7+
* Android Browser 4.4+
* Blackberry Browser 10+

Source: [http://caniuse.com/flexbox](http://caniuse.com/flexbox)