<template>
    <div>
      ログインフォームに遷移します。少々お待ちください。
      {{ users }}
    </div>
  </template>

  <script>
    import { mapGetters } from 'vuex'


    export default {
      data () {
        return {
        }
      },
    computed: {
      ...mapGetters({
        users: 'users/users'
      })
    },
    mounted () {
      this.getUsers()
    },
      methods: {
        getUsers () {
          this.$store.dispatch('users/fetchUsers')
            .catch(err => {
              console.log(err)
            })
        }
        // Promise.all([
        //   this.$store.dispatch('estimates/fetchEstimate', { estimateId: this.estimateId }),
        //   this.$store.dispatch('estimate_details/fetchEstimateDetails', { estimateId: this.estimateId }),
        //   this.$store.dispatch('estimate_detail_last_update_histories/fetchEstimateDetailLastUpdateHistories', { estimateId: this.estimateId }),
        //   this.$store.dispatch('estimate_differences_from_source/fetchEstimateDifferencesFromSource', { estimateId: this.estimateId })
        // ]).catch(err => {
        //   this.$store.commit(
        //     'access_histories/removeEstimate',
        //     { pl: { [constant.ESTIMATE_ID]: this.estimateId }, token: this.token }
        //   )
        //   this.$nuxt.error({ code: err.response.data.code, message: messages.ESTIMATE.INIT_ERROR })
        // })
      }
    }
  </script>