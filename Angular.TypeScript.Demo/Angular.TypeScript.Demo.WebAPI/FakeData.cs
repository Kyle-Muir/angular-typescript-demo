using System;
using System.Collections.Generic;
using Angular.TypeScript.Demo.WebAPI.Models;

namespace Angular.TypeScript.Demo.WebAPI
{
    public static class FakeData
    {
        public static IEnumerable<RedditTopicDto> RedditTopics = new List<RedditTopicDto>
        {
            new RedditTopicDto
            {
                Id =  1,
                HostUrl = new Uri("http://i.giphy.com/PUBxelwT57jsQ.gif"),
                SubmissionTime = DateTime.Now.AddDays(-1),
                Submitter = new RedditUserDto
                {
                    Id = Guid.NewGuid(),
                    Name = "KyleMuir"
                },
                Subreddit = "/r/funny",
                Title = "You won't believe what 8 out of 10 cats enjoy!",
                TopicUrl = new Uri("http://localhost/#"),
                Upvotes = 9821
            },
            new RedditTopicDto
            {
                Id =  2,
                HostUrl = new Uri("http://i.giphy.com/SmQiPbbXqUH6w.gif"),
                SubmissionTime = DateTime.Now.AddDays(-2),
                Submitter = new RedditUserDto
                {
                    Id = Guid.NewGuid(),
                    Name = "JonoCairns"
                },
                Subreddit = "/r/pics",
                Title = "8 things you never knew could kill you, number 6 will shock you!",
                TopicUrl = new Uri("http://localhost/#"),
                Upvotes = 2846
            },
            new RedditTopicDto
            {
                Id = 3,
                HostUrl = new Uri("http://i.giphy.com/M7t5GIszd4Nc4.gif"),
                SubmissionTime = DateTime.Now.AddDays(-3),
                Submitter = new RedditUserDto
                {
                    Id = Guid.NewGuid(),
                    Name = "AquibMaster"
                },
                Subreddit = "/r/murica",
                Title = "The three deadliest drugs in America are all totally legal!",
                TopicUrl = new Uri("http://localhost/#"),
                Upvotes = 1
            },
            new RedditTopicDto
            {
                Id = 3,
                HostUrl = new Uri("http://i.giphy.com/qPaQo9ShxpZkc.gif"),
                SubmissionTime = DateTime.Now.AddDays(-5),
                Submitter = new RedditUserDto
                {
                    Id = Guid.NewGuid(),
                    Name = "KimKardashian"
                },
                Subreddit = "/r/kardashians",
                Title = "You can't believe what Caitlyn Jenner is doing now.",
                TopicUrl = new Uri("http://localhost/#"),
                Upvotes = 420
            },
            new RedditTopicDto
            {
                Id = 3,
                HostUrl = new Uri("http://i.giphy.com/coiqy9iwdlLl6.gif"),
                SubmissionTime = DateTime.Now.AddDays(-5),
                Submitter = new RedditUserDto
                {
                    Id = Guid.NewGuid(),
                    Name = "TyrannosaurusRex"
                },
                Subreddit = "/r/dinos",
                Title = "The 9 things they never told you about Jurrasic World...",
                TopicUrl = new Uri("http://localhost/#"),
                Upvotes = 86
            }
        };
    }
}