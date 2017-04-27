<template>
  <div>
    <input v-model="addnew" @keyup.13="addNewItem"/>
    <ul v-for="item in items">
      <li v-text="item.things" :class="{finshed:item.isdone,doing:!item.isdone}" @click="toggle(item)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'todos',
      items: [
        {
          things: 'chifan',
          isdone: true
        },
        {
          things: 'gongzuo',
          isdone: false
        }
      ],
      addnew: ''
    }
  },
  methods: {
    addNewItem () {
      console.log(this.addnew);
      this.items.push({
        things: this.addnew,
        isdone: false
      })
      this.addnew = '';
    },
    toggle (item) {
      item.isdone = !item.isdone;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .finshed{
    color:red;
    text-decoration: line-through;
  }
  .doing{
    color:blue;
  }
</style>
