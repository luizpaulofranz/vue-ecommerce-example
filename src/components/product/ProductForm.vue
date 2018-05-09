<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">

      <div class="form-group">
        <label>Nome</label>
        <!--Usanso VeeValidate com v-validate e errors.has(...)-->
        <input
          type="text"
          placeholder="Name"
          v-model="model.name"
          v-validate="'required'"
          name="name"
          :class="{'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Nome é Obrigatório</span>
      </div>
      <div class="form-group">
        <label>Preço</label>
        <input
          type="number"
          placeholder="Price"
          v-model="model.price"
          v-validate="'required'"
          name="price"
          :class="{'form-control': true, 'error': errors.has('price') }" />
        <span class="small text-danger" v-show="errors.has('price')">Preço é Obrigatório</span>
      </div>

      <div class="form-group">
        <label>Fabricante</label>
        <select
          type="text"
          class="form-control"
          v-model="model.manufacturer"
          v-validate="'required'"
          name="manufacturer"
          :class="{'form-control': true, 'error': errors.has('manufacturer') }">
          <template v-for="manufacturer in manufacturers">
            <!--:key="manufacturer._id" apenas pra remover um erro no lint-->
            <option :value="manufacturer._id" :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)" :key="manufacturer._id">{{manufacturer.name}}</option>
          </template>
        </select>
        <span class="small text-danger" v-show="errors.has('manufacturer')">Fabricante é Obrigatório</span>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Imagem</label>
        <input
          type="text"
          class="form-control"
          placeholder="Image"
          v-model="model.image"
          v-validate="'required|url'"
          name="image"
          :class="{'form-control': true, 'error': errors.has('image') }" />
        <span class="small text-danger" v-show="errors.has('image')">Imagem é Obrigatório e deve ser uma URL válida</span>
      </div>
      <div class="form-group">
        <label>Descrição</label>
        <textarea
          type="number"
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="model.description"
          v-validate="'required'"
          name="description"
          :class="{'form-control': true, 'error': errors.has('description') }"></textarea>
        <span class="small text-danger" v-show="errors.has('description')">Descrição é Obrigatório</span>
      </div>

      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <!--se isEditing esta setado o botao exive Atualizar-->
          <span v-if="isEditing">Atualizar Produto</span>
          <span v-else>Adicionar Produto</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  import {
    ERROR_MSG
  } from '../../store/mutation-types'
  export default {
    // essas sao as propriedades passadas para dentro da tag deste componente
    props: ['model', 'manufacturers', 'isEditing'],
    created () {
    },
    methods: {
      saveProduct () {
        //console.log(this.fields.valid())
        this.$validator.validateAll().then(() => {
          this.$emit('save-product', this.model)
        }).catch(() => {
          this.$store.commit(ERROR_MSG, {
            type: 'error',
            title: 'Validation!',
            content: 'Please ensure the form is valid.'
          })
        })
      }
    }
  }
</script>
