<template>
    <div>
      <!-- 导航栏 -->
      <xtxNavBarVue title="分类" :fixed="true" />
      <!-- 分类栏 -->
      <div class="box">
        <van-tree-select height="90vh" :items="items" :main-active-index.sync="active"  >
        <template #content>
          <van-grid :column-num="4" :gutter="10" :icon-size="54">
            <a href="#" v-for="item in items[active].children" :key="item.id"><van-grid-item :icon="item.picture" :text="item.name" /></a>
            <!-- <a href="#"><van-grid-item icon="photo-o" text="文字" /></a>
            <a href="#"><van-grid-item icon="photo-o" text="文字" /></a>
            <a href="#"><van-grid-item icon="photo-o" text="文字" /></a> -->
          </van-grid>
          <!-- <a href="#">
            <van-image
            v-if="active === 0"
            src="https://yanxuan.nosdn.127.net/b42a85ef15f856081ea9f49e5f6893e2.png?quality=95&imageView"
          />
          </a>
          <a href="#">
            <van-image
            v-if="active === 1"
            src="https://img01.yzcdn.cn/vant/apple-1.jpg"
            />
          </a> -->

        </template>
      </van-tree-select>
      </div>
    </div>
</template>

<script>
import xtxNavBarVue from '@/components/xtx-navBar.vue'
export default {
  name: 'xtx-more',
  components: { xtxNavBarVue },
  data () {
    return {
      active: 0,
      items: [
        {
          id: 1005000,
          text: '居家',
          children: [
            {
              id: '1005009',
              name: '茶咖酒具',
              picture: 'https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '1007000',
              name: '水具杯壶',
              picture: 'https://yanxuan.nosdn.127.net/45b50d5f8afbd6fdef97314647dcb7db.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '1017000',
              name: '宠物食品',
              picture: 'https://yanxuan.nosdn.127.net/b42a85ef15f856081ea9f49e5f6893e2.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109248004',
              name: '宠物用品',
              picture: 'https://yanxuan.nosdn.127.net/e766b09029ca00680d1e651b5cdc42bd.png?quality=95&imageView',
              children: null,
              goods: null
            }
          ]
        },
        {
          id: 1005002,
          text: '美食',
          children: [
            {
              id: '1008014',
              name: '网易黑猪',
              picture: 'https://yanxuan.nosdn.127.net/79b904ccd106d3875a90d4430f2e8ad2.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109206009',
              name: '水产海鲜',
              picture: 'https://yanxuan.nosdn.127.net/cc361cf40d4f81c7eccefed1ad18face.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109206010',
              name: '全球美食',
              picture: 'https://yanxuan.nosdn.127.net/c11f5457dfb38e76f60100c87ecdf0cd.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109264009',
              name: '冷冻冷藏',
              picture: 'https://yanxuan.nosdn.127.net/fe8e9c985d538cc1c1ced011a67ffe69.png?quality=95&imageView',
              children: null,
              goods: null
            }
          ]
        },
        {
          id: 1010000,
          text: '服饰',
          children: [
            {
              id: '109294011',
              name: '室外拖鞋',
              picture: 'https://yanxuan.nosdn.127.net/57e4f01648100ec94c7bfee35171fdcb.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109294012',
              name: '春夏潮鞋',
              picture: 'https://yanxuan.nosdn.127.net/3f32a302a4cb4afe7d5d89b666566e60.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109296001',
              name: '飞织系列',
              picture: 'https://yanxuan.nosdn.127.net/b9e005aef67f1a93828847b071114296.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109296002',
              name: '一脚蹬懒人系列',
              picture: 'https://yanxuan.nosdn.127.net/cc2470afdf28b9a84639703b592da6f7.png?quality=95&imageView',
              children: null,
              goods: null
            }
          ]
        },
        {
          id: 1011000,
          text: '母婴',
          children: [
            {
              id: '1020003',
              name: 'T恤/polo/衬衫',
              picture: 'https://yanxuan.nosdn.127.net/1f0089afcec911db7202fbcdae57d5f8.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '1091003',
              name: '卫衣/毛衫',
              picture: 'https://yanxuan.nosdn.127.net/bf9f0a32c2b79c6d29de7d0843888b48.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109243018',
              name: '外套/套装',
              picture: 'https://yanxuan.nosdn.127.net/8a4be0d65d4a2f3ba36b3af8ee8d9414.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109243021',
              name: '连体衣/礼盒',
              picture: 'https://yanxuan.nosdn.127.net/773677cc0922628152a9b3cbd862426f.png?quality=95&imageView',
              children: null,
              goods: null
            }
          ]
        },
        {
          id: 1013001,
          text: '个护',
          children: [
            {
              id: '1009000',
              name: '家庭清洁',
              picture: 'https://yanxuan.nosdn.127.net/718318c0d3b55d011fcb7c7c843902ce.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '1020002',
              name: '浴室用品',
              picture: 'https://yanxuan.nosdn.127.net/dfb6142de1bd2f59b251eb8f7c7ea2fb.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109243016',
              name: '餐厨清洁',
              picture: 'https://yanxuan.nosdn.127.net/55d927e337c1f6d394359e99ef72a621.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109261055',
              name: '毛巾浴巾',
              picture: 'https://yanxuan.nosdn.127.net/949c5f8b077cf386ff9f1f18bec3408b.png?quality=95&imageView',
              children: null,
              goods: null
            }
          ]
        },
        {
          id: 1019000,
          text: '严选',
          children: [
            {
              id: '109256019',
              name: '卫浴用品',
              picture: 'https://yanxuan.nosdn.127.net/00d79ce9acb7285b15f83c92940b557f.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109256022',
              name: '高级珠宝',
              picture: 'https://yanxuan.nosdn.127.net/b26d34d052d9c780d695bf4b601bfffc.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109256023',
              name: '时尚配搭',
              picture: 'https://yanxuan.nosdn.127.net/7daf27044470881e8839b46a262d958c.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109275003',
              name: '数码电器',
              picture: 'https://yanxuan.nosdn.127.net/c01b0f1075158c5a5eb1ff9a33347bb8.png?quality=95&imageView',
              children: null,
              goods: null
            }
          ]
        },
        {
          id: 1043000,
          text: '数码',
          children: [
            {
              id: '1008006',
              name: '影音娱乐',
              picture: 'https://yanxuan.nosdn.127.net/f5797ca77cfe413e7753ec69f9bd4bb1.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '1028001',
              name: '乐器',
              picture: 'https://yanxuan.nosdn.127.net/da0ac345e98c04594b697b56ebc373a5.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109243036',
              name: '车载用品',
              picture: 'https://yanxuan.nosdn.127.net/3f45fbcdac7e8532b6a1570e6d7fe171.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109243046',
              name: '办公文具',
              picture: 'https://yanxuan.nosdn.127.net/801583d2f58274b13dc6a03daed1c3c9.png?quality=95&imageView',
              children: null,
              goods: null
            }
          ]
        },
        {
          id: 109243029,
          text: '运动',
          children: [
            {
              id: '109295003',
              name: '登机箱',
              picture: 'https://yanxuan.nosdn.127.net/2b1edfa6d05445de684b7df854895c0b.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109295004',
              name: '托运箱',
              picture: 'https://yanxuan.nosdn.127.net/cd44477ca9614ed81ffb58c5cacdab26.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109295009',
              name: '出行配件',
              picture: 'https://yanxuan.nosdn.127.net/141625f78404b8c81e431084a139b836.png?quality=95&imageView',
              children: null,
              goods: null
            },
            {
              id: '109297000',
              name: '户外运动鞋',
              picture: 'https://yanxuan.nosdn.127.net/c6ff77bbb7d0f39622da300f6f5f5442.png?quality=95&imageView',
              children: null,
              goods: null
            }
          ]
        },
        {
          id: 19999999,
          text: '杂项',
          children: [
            {
              id: '19999999001',
              name: '乐器杂项',
              picture: 'https://yanxuan.nosdn.127.net/da0ac345e98c04594b697b56ebc373a5.png?quality=95&imageView',
              children: null,
              goods: null
            }
          ]
        }
      ]

    }
  },
  methods: {
    btn (id) {
      console.log(id)
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  padding-top:50px;
}
</style>
