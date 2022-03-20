let chai  = require('chai')
let testData = require('../../fixtures/ProxyApiData.json')
let {expect,assert} = require('chai')
//let jsonPath= require(jsonpath)
let chaiHttp = require('chai-http')

chai.use(chaiHttp)

let qty =20
describe('Proxy api test',()=>{

    it('Validating batch Inventory api', async ()=>{

        let res = await chai.request(`${testData.proxyURL}`)
                        .post('/inventory_batch')
                        .send([
                            {"sku":"576690910193","qty":`${qty}`,"store_number":"MBEC02"},
                             {"sku":"576690910192","qty":`${qty}`,"store_number":"MBEC02"},
                              {"sku":"576690910191","qty":`${qty}`,"store_number":"MBEC02"},
                              {"sku":"576690910193","qty":`${qty}`,"store_number":"MBEC01"},
                             {"sku":"576690910192","qty":`${qty}`,"store_number":"MBEC01"},
                              {"sku":"576690910191","qty":`${qty}`,"store_number":"MBEC01"}
                        ])
                        .set('Content-Type', 'application/json')
                        .set('x-api-key', 'GZfbkFLnil29isBFPfxTr3mLANMQy9Lx18ITiima')
                        

                        //expect(res).to.have.status(200)
                        console.log(res.body)
                        var jsonObject = res.body
                        //expect(jsonObject.message).to.contain('Inventory update initiated')

                        //validating if the invetory synced to rubicon the data in Rubicon
                        setTimeout(async ()=>{
                            let getR3Inventory = await chai.request('https://in.data.aceturtle.in/staging/rubicon')
                                    .get('/inventory?query={"sku":{"$in":["576690910193","576690910191","576690910192"]},"store_number":{"$in":["MBEC01","MBEC02"]}}')
                                    .set('x-api-key', 'GZfbkFLnil29isBFPfxTr3mLANMQy9Lx18ITiima')

                                   // expect(getR3Inventory).to.have.status(200)
                                    //console.log(getR3Inventory.body)
                                    jsonObject = getR3Inventory.body
                                    jsonObject.forEach(element => {
                                        console.log(element.inventory_details.properties.qty)
                                        expect(element.inventory_details.properties.qty).to.eql(qty)
                                        
                                    });
                                    
                                    
                        },10000)

                        
                        

                        
                        
                

    // it('Create Ajio Shipment and validating the get Data',async ()=>{

    //         let res = await chai.request()



    // })
                                    



























    })
























})