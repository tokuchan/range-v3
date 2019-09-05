var searchData=
[
  ['empty',['empty',['../structranges_1_1view__interface.html#af84a8dc9242b64c4c620058dffff02cd',1,'ranges::view_interface::empty() noexcept(noexcept(bool(ranges::size(std::declval&lt; D&lt; True &gt; &amp; &gt;())==0))) -&gt; bool requires True &amp;&amp;(Cardinality&lt; 0) &amp;&amp;(Cardinality !=infinite) &amp;&amp;(!forward_range&lt; D&lt; True &gt;&gt;)&amp;&amp;sized_range&lt; D&lt; True &gt;&gt;'],['../structranges_1_1view__interface.html#ae48d4edb1918a64dc7bed741974affa2',1,'ranges::view_interface::empty() const noexcept(noexcept(bool(ranges::size(std::declval&lt; D&lt; True &gt; const &amp; &gt;())==0))) -&gt; bool requires True &amp;&amp;(Cardinality&lt; 0) &amp;&amp;(Cardinality !=infinite) &amp;&amp;(!forward_range&lt; D&lt; True &gt; const &gt;)&amp;&amp;sized_range&lt; D&lt; True &gt; const &gt;'],['../structranges_1_1view__interface.html#abc01f2937cd054a2ee8c2097e06c5ea2',1,'ranges::view_interface::empty() noexcept(noexcept(bool(ranges::begin(std::declval&lt; D&lt; True &gt; &amp; &gt;())==ranges::end(std::declval&lt; D&lt; True &gt; &amp; &gt;())))) -&gt; bool requires True &amp;&amp;(!detail::has_fixed_size_(Cardinality)) &amp;&amp;forward_range&lt; D&lt; True &gt;&gt;'],['../structranges_1_1view__interface.html#ac0c2d11cd7d348402a712935df2db851',1,'ranges::view_interface::empty() const noexcept(noexcept(bool(ranges::begin(std::declval&lt; D&lt; True &gt; const &amp; &gt;())==ranges::end(std::declval&lt; D&lt; True &gt; const &amp; &gt;())))) -&gt; bool requires True &amp;&amp;(!detail::has_fixed_size_(Cardinality)) &amp;&amp;forward_range&lt; D&lt; True &gt; const &gt;']]],
  ['end',['end',['../structranges_1_1view__facade.html#ada3b519e717b2c935e0c494ba31fde06',1,'ranges::view_facade::end() -&gt; detail::facade_sentinel_t&lt; D &gt; requires same_as&lt; D, Derived &gt;'],['../structranges_1_1view__facade.html#a801dba10a18f50dc1b81088eea8ae7c7',1,'ranges::view_facade::end() const -&gt; detail::facade_sentinel_t&lt; D const &gt; requires same_as&lt; D, Derived &gt;']]],
  ['ends_5fwith',['ends_with',['../group__group-algorithms.html#ga1c871db78e32e35d5e77d844f2df9bd6',1,'ranges::ends_with(I0 begin0, S0 end0, I1 begin1, S1 end1, C pred=C{}, P0 proj0=P0{}, P1 proj1=P1{}) -&gt; bool requires((forward_iterator&lt; I0 &gt; &amp;&amp;sentinel_for&lt; S0, I0 &gt;)||(input_iterator&lt; I0 &gt; &amp;&amp;sized_sentinel_for&lt; S0, I0 &gt;)) &amp;&amp;((forward_iterator&lt; I1 &gt; &amp;&amp;sentinel_for&lt; S1, I1 &gt;)||(input_iterator&lt; I1 &gt; &amp;&amp;sized_sentinel_for&lt; S1, I1 &gt;)) &amp;&amp;indirectly_comparable&lt; I0, I1, C, P0, P1 &gt;'],['../group__group-algorithms.html#ga153b08aa10efdd1745b55a66dff7aa65',1,'ranges::ends_with(Rng0 &amp;&amp;rng0, Rng1 &amp;&amp;rng1, C pred=C{}, P0 proj0=P0{}, P1 proj1=P1{}) -&gt; bool requires(forward_range&lt; Rng0 &gt;||(input_range&lt; Rng0 &gt; &amp;&amp;sized_range&lt; Rng0 &gt;)) &amp;&amp;(forward_range&lt; Rng1 &gt;||(input_range&lt; Rng1 &gt; &amp;&amp;sized_range&lt; Rng1 &gt;)) &amp;&amp;indirectly_comparable&lt; iterator_t&lt; Rng0 &gt;, iterator_t&lt; Rng1 &gt;, C, P0, P1 &gt;']]],
  ['equal',['equal',['../group__group-algorithms.html#ga62f56efe45b73d94db6a81f40e12d1b9',1,'ranges::equal(I0 begin0, S0 end0, I1 begin1, C pred=C{}, P0 proj0=P0{}, P1 proj1=P1{}) -&gt; bool requires input_iterator&lt; I0 &gt; &amp;&amp;sentinel_for&lt; S0, I0 &gt; &amp;&amp;input_iterator&lt; I1 &gt; &amp;&amp;indirectly_comparable&lt; I0, I1, C, P0, P1 &gt;'],['../group__group-algorithms.html#gaf7135f2a482e12c3d97d77c3e13937eb',1,'ranges::equal(I0 begin0, S0 end0, I1 begin1, S1 end1, C pred=C{}, P0 proj0=P0{}, P1 proj1=P1{}) -&gt; bool requires input_iterator&lt; I0 &gt; &amp;&amp;sentinel_for&lt; S0, I0 &gt; &amp;&amp;input_iterator&lt; I1 &gt; &amp;&amp;sentinel_for&lt; S1, I1 &gt; &amp;&amp;indirectly_comparable&lt; I0, I1, C, P0, P1 &gt;'],['../group__group-algorithms.html#ga4bb144928dd7fc7c4004bde7b8b5240e',1,'ranges::equal(Rng0 &amp;&amp;rng0, I1Ref &amp;&amp;begin1, C pred=C{}, P0 proj0=P0{}, P1 proj1=P1{}) -&gt; bool requires input_range&lt; Rng0 &gt; &amp;&amp;input_iterator&lt; uncvref_t&lt; I1Ref &gt;&gt; &amp;&amp;indirectly_comparable&lt; iterator_t&lt; Rng0 &gt;, uncvref_t&lt; I1Ref &gt;, C, P0, P1 &gt;'],['../group__group-algorithms.html#gacd9f750063e371826d0d82e81c5d825e',1,'ranges::equal(Rng0 &amp;&amp;rng0, Rng1 &amp;&amp;rng1, C pred=C{}, P0 proj0=P0{}, P1 proj1=P1{}) -&gt; bool requires input_range&lt; Rng0 &gt; &amp;&amp;input_range&lt; Rng1 &gt; &amp;&amp;indirectly_comparable&lt; iterator_t&lt; Rng0 &gt;, iterator_t&lt; Rng1 &gt;, C, P0, P1 &gt;']]],
  ['equal_5frange',['equal_range',['../group__group-algorithms.html#ga0e5ccafe6cf7b68fa9b042d550c1396e',1,'ranges::equal_range(I first, S last, V const &amp;val, C pred=C{}, P proj=P{}) -&gt; subrange&lt; I &gt; requires forward_iterator&lt; I &gt; &amp;&amp;sentinel_for&lt; S, I &gt; &amp;&amp;indirect_strict_weak_order&lt; C, V const *, projected&lt; I, P &gt;&gt;'],['../group__group-algorithms.html#gab6bb9cf9ee4851960191848e5fc1a34e',1,'ranges::equal_range(Rng &amp;&amp;rng, V const &amp;val, C pred=C{}, P proj=P{}) -&gt; safe_subrange_t&lt; Rng &gt; requires forward_range&lt; Rng &gt; &amp;&amp;indirect_strict_weak_order&lt; C, V const *, projected&lt; iterator_t&lt; Rng &gt;, P &gt;&gt;']]]
];
