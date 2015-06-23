using System;

namespace Angular.TypeScript.Demo.WebAPI.Models
{
    public class RedditTopicDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public Uri TopicUrl { get; set; }
        public Uri HostUrl { get; set; }
        public DateTime SubmissionTime { get; set; }
        public int Upvotes { get; set; }
        public string Subreddit { get; set; }
        public RedditUserDto Submitter { get; set; }
    }
}