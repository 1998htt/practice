const router = new router()
router.get('/abc',(ctx,next)=>{
    ctx.body = ctx.query;
})