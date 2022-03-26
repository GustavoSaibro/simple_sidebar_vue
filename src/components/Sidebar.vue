<template>
  <div class="sidebar">
    <h1>Sidebar</h1>
    <SidebarLink
      v-for="item, i in container"
      :key='i'
      :to='item.to'
      :linkName='item.linkName'
      :icon='item.icon'
    />
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarLink
  },
  setup () {
    const container = [
      { to: '/', linkName: 'home', icon: 'fa-solid fa-house' },
      { to: '/teste', linkName: 'teste', icon: 'fa-solid fa-house' },
      { to: '/teste2', linkName: 'teste2', icon: 'fa-solid fa-house' },
    ]

    return {
      container,
    }

  }

}
</script>

<style>
:root {
  --sidebar-bg-color: green;
  --sidebar-item-hover: blue;
  --sidebar-item-active: red;
}
</style>
<style scoped>
.sidebar {
  color: white;
  background: var(--sidebar-bg-color);

  display: flex;
  flex-direction: column;

  float: left;
  position: fixed;

  top: 0;
  left: 0;
  bottom: 0;
  padding: 0;

  border-bottom-right-radius: 1em;
  border-top-right-radius: 1em;

  transition: 0.3 ease;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  cursor: pointer;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}
span {
  display: flex;
  margin: 20px 15px 10px 20px;
  padding: 0;
}
</style>