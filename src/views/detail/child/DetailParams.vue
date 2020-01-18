<template>
  <div v-if="Object.keys(itemparams).length !== 0" class="detail-params">
    <table class="rule">
      <tr v-for="(item,index) in itemparams.rule.tables[0]" :key="index">
        <td>{{item[0]}}</td>
        <td>{{item[1]}}</td>
        <td>{{item[2]}}</td>
        <td>{{item[3]}}</td>
      </tr>
    </table>
    <div class="disclaimer">{{itemparams.rule.disclaimer}}</div>
    <table class="infos">
      <tr v-for="(item,index) in itemparams.info.set" :key="index">
        <td class="info-one">{{item.key}}</td>
        <td class="value-color">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name:'DetailParams',
    data(){
      return {

      }
    },
    props: {
      itemparams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params{
    border-bottom: 5px solid #eee;
    padding: 20px;
  }
  .rule,.infos{
    width: 100%;
    padding: 20px;
    font-size: 14px;
    border-collapse: collapse;
  }
  tr{
    border-bottom: 1px solid #eee;
  }
  td{
    padding: 10px;
  }
  .info-one{
    width: 70px;
  }
  .disclaimer{
    font-size: 13px;
    padding: 10px 0;
  }
  .value-color{
    color:var(--color-high-text);
  }
</style>