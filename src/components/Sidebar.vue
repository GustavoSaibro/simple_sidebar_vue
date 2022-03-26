<template>
  <div
    class="sidebar"
    :style="{'width': sidebarWidth.sidebarWidth + 'px'}"
  >
    <h1>
      <span
        :class="{'span-collapsed':collapsed}"
        v-if="collapsed"
      >
        <div>V

          <div>S</div>
        </div>
      </span>
      <span v-else>
        Vue Sidebar
      </span>
    </h1>
    <SidebarLink
      v-for="item, i in container"
      :key='i'
      :to='item.to'
      :linkName='item.linkName'
      :icon='item.icon'
    />
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fa-solid fa-angles-right" />
    </span>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarLink
  },
  setup () {
    const store = useStore()

    const sidebarWidth = reactive({
      sidebarWidth: store.getters.sidebarWidth
    })
    const collapsed = computed(() => store.getters.isCollapsed)

    function toggleSidebar () {
      store.commit('toggleSidebar')
      sidebarWidth.sidebarWidth = store.getters.sidebarWidth
    }

    const container = [
      { to: '/', linkName: 'home', icon: 'fa-solid fa-house' },
      { to: '/teste', linkName: 'teste', icon: 'fa-solid fa-atom' },
      { to: '/teste2', linkName: 'teste2', icon: 'fa-solid fa-comment' },
    ]

    return {
      container,
      sidebarWidth,
      collapsed,
      toggleSidebar
    }

  }

}
</script>

<style>
:root {
  --sidebar-bg-color: rgb(71, 89, 190);
  --sidebar-item-hover: rgb(246, 202, 131);
  --sidebar-item-active: rgb(123, 206, 91);
}
</style>
<style scoped>
.sidebar {
  color: rgb(246, 240, 240);
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

.sidebar h1 {
  height: 2.5em;
  left: 0;
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

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
  margin-left: 5px;
}

.span-collapsed {
  margin-left: 8px;
  position: relative;
}
</style>