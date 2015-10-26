using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors; 


namespace PigSkinCubeController.Controllers
{
    [EnableCors(origins:"*", headers:"*", methods: "*")]
    public class ValuesController : ApiController
    {

        [HttpGet]
        [ActionName("getCubeQuery")]
        public string SampleMessage(string date, string riskScore, string parms)
        {

            string foo = "a";
            try
            {
                //JavaScriptSerializer jss = new JavaScriptSerializer();
                //Dictionary<string, string> dict = jss.Deserialize<Dictionary<string, string>>(parms);
                ////TimeInformation timeInfo = new TimeInformation(dict["p1s"], dict["p1e"], dict["p2s"], dict["p2e"],  dict["EBM"]);

                ////Logger.LogMessage("From SampleMessage Service: ", string.Format("name = {0} elm = {1} dash = {2}", name, elm, dashboard));
                //ExecuteCubeQuery SL = new ExecuteCubeQuery();
                //SL.getConString();
                //SL.openCon("Data Source=TOPSDEV02;Catalog=MI_Cube_4_DEMO");
                //SL.beginTrans();
                ////foo = SL.startCommand(name, timeInfo, state, queryID);
                return foo;
            }
            catch (Exception ex)
            {
                //EventLogger.LogError("Error in GetDashboardReportsData SampleMessage Service: " + ex.ToString());
                return foo;
            }

        }

        
        
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
