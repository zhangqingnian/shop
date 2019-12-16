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
                  <dd><a href="javascript:void(0)" @click="selectFilter('all')" :class="{'cur':currentIndex == 'all'}">选择价格</a></dd>
                  <dd v-for="(item,index) in priceFilter" @click="selectFilter(index,item)">
                    <a href="javascript:void(0)" :class="{'cur':currentIndex == index}">￥ {{item.startPrice}} - {{item.endPrice}} 元</a>
                  </dd>
                </dl>
              </div>

              <!-- search result accessories list -->
              <div class="accessory-list-wrap">
                <div class="accessory-list col-4">
                  <ul>
                    <li v-for="item in filterList">
                      <div class="pic">
                        <a href="#"><img :src="'/static/goods/'+item.productImage" alt=""></a>
                      </div>
                      <div class="main">
                        <div class="name">{{item.productName}}</div>
                        <div class="price">{{item.salePrice}}</div>
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
  import '../../static/css/goods-list.css';
  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import NavBreader from '@/components/NavBreader'
  import axios from  'axios'
  export default {
      components: {
        NavHeader,
        NavFooter,
        NavBreader
      },
      data() {
          return {
            goodsList:[],
            priceFilter:[
              {startPrice:0,endPrice:1000.00},
              {startPrice:1000.00,endPrice:2000.00},
              {startPrice:2000.00,endPrice:3000.00},
              {startPrice:3000.00,endPrice:4000.00},
              {startPrice:4000.00,endPrice:5000.00},
              {startPrice:5000.00,endPrice:6000.00}
            ],
            currentIndex:'all',
            currentPrice:{},
          }
      },
      computed:{
        filterList(){
          let {startPrice, endPrice} = this.currentPrice;
          if(!endPrice){
            return this.goodsList
          }
          let filterList = this.goodsList.filter(goods => {
            return goods.salePrice > startPrice && goods.salePrice < endPrice
          })
          console.log(filterList)
          return filterList
        }
      },
      mounted() {
        axios.get('http://localhost:3000/goodsList').then(res => {
          this.goodsList = res.data.result;
        })
      },
      methods: {
        selectFilter(index, item){
          this.currentIndex = index;
          this.currentPrice = item || {};
        }
      }
  }
</script>

<style scoped>

</style>
