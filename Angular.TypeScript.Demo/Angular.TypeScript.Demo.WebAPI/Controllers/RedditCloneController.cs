using System;
using System.Collections.Generic;
using System.Web.Http;
using Angular.TypeScript.Demo.WebAPI.Models;

namespace Angular.TypeScript.Demo.WebAPI.Controllers
{
    public class RedditCloneController : ApiController
    {
        // GET api/values
        public IEnumerable<RedditTopicDto> Get()
        {
            return new List<RedditTopicDto>
            {
                new RedditTopicDto
                {
                    HostUrl = new Uri("http://www.imgur.com"),
                    SubmissionTime = DateTime.Now.AddMinutes(-5),
                    Submitter = new RedditUserDto
                    {
                        Id = Guid.NewGuid(),
                        Name = "KyleMuir"
                    },
                    Subreddit = "/r/funny",
                    Title = "You won't believe what 8 out of 10 cats enjoy!",
                    TopicUrl = new Uri("http://localhost/#"),
                    Upvotes = 9821
                }
            };
        }

        // GET api/values/5
        public RedditTopicDto Get(int id)
        {
            return new RedditTopicDto
            {
                HostUrl = new Uri("http://www.imgur.com"),
                SubmissionTime = DateTime.Now.AddMinutes(-5),
                Submitter = new RedditUserDto
                {
                    Id = Guid.NewGuid(),
                    Name = "KyleMuir"
                },
                Subreddit = "/r/funny",
                Title = "You won't believe what 8 out of 10 cats enjoy!",
                TopicUrl = new Uri("http://localhost/#"),
                Upvotes = 9821
            };
        }
    }
}
