using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Angular.TypeScript.Demo.WebAPI.Models;

namespace Angular.TypeScript.Demo.WebAPI.Controllers
{
    public class RedditCloneController : ApiController
    {
        // GET api/values
        public IEnumerable<RedditTopicDto> Get()
        {
            return FakeData.RedditTopics;
        }

        // GET api/values/5
        public RedditTopicDto Get(int id)
        {
            return FakeData.RedditTopics.FirstOrDefault(topic => topic.Id == id);
        }
    }
}
