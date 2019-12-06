<template>
    <div>
        <NavHeader />
        <NavBreader />
        <div class="accessory-result-page">
          <div class="container">
            <div class="filter-nav">
              <span class="sortby">排序:</span>
              <a href="javascript:void(0)" class="default cur">默认</a>
              <a href="javascript:void(0)" class="price">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
              <a href="javascript:void(0)" class="filterby">筛选</a>
            </div>
            <div class="accessory-result">
              <!-- filter -->
              <div class="filter" id="filter">
                <dl class="filter-price">
                  <dt>价格区间:</dt>
                  <dd><a href="javascript:void(0)">选择价格</a></dd>
                  <dd>
                    <a href="javascript:void(0)">￥ 0 - 100 元</a>
                  </dd>
                </dl>
              </div>

              <!-- search result accessories list -->
              <div class="accessory-list-wrap">
                <div class="accessory-list col-4">
                  <ul>
                    <li>
                      <div class="pic">
                        <a href="#"><img src="/static/img/1.jpg" alt=""></a>
                      </div>
                      <div class="main">
                        <div class="name">小米电视4 55英寸</div>
                        <div class="price">3999</div>
                        <div class="btn-area">
                          <a href="javascript:;" class="btn btn--m">加入购物车</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavFooter />
    </div>
</template>

<script>

  //import '../../static/css/nav-header.css'
//  import '../../static/css/nav-bread.css'
  //import '../../static/css/nav-footer.css'
  import '../../static/css/goods-list.css';
  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import NavBreader from '@/components/NavBreader'
  export default {
      components: {
        NavHeader,
        NavFooter,
        NavBreader
      },
      data() {
          return {}
      },
      mounted() {
      },
      methods: {}
  }
</script>

<style scoped>

</style>
