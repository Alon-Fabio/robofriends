const constants = require('./constants')

// let wraper
// beforeEach(()=>{
//     wraper = renderer.create(constants).toJSON()
// })
describe("Constants", ()=>{
    it("Snapshot", ()=>{
        expect(constants).toMatchSnapshot()
    })
})