<template>
  <tr>
    <td colspan="2">Investimento para Iniciantes</td>
    <td>
      <router-link :to = "{name: 'FormEdit', params:{}}" class="btn btn-warning">editar</router-link>
      <button type="button" class="btn btn-danger">excluir</button>
    </td>
  </tr>

</template>

<script>
export default {
  name: "CourseFormCard",
  props: {
    courseform: Object,
  },
};
</script>

<style>
@import "../../public/BodyCss.css";
</style>