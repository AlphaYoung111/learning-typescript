<template>
  <div class="container">
    <memo-item v-for="item in filterMemo()" :key="item.id" :memo="item"></memo-item>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ItemData from "../model/ItemData";

import MemoItem from "./MemoItem.vue";

@Component({
  components: {
    MemoItem
  }
})
export default class ItemList extends Vue {
  //因为继承与vue所以this能够拿vue中的方法
  public memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;
  filterMemo(): any {
    if (this.$store.state.filterCateId == -1) {
      return this.memoArr;
    } else {
      return this.memoArr.filter(
        (ele: any) => ele.categoryId == this.$store.state.filterCateId
      );
    }
  }
}
</script>