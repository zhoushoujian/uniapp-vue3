import router from 'uniapp-router'

router.beforeEach((_to: object, _from: object, next: Function) => {
  next()
})

// router.afterEach((from, to, type) => {})

export default router
