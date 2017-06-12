exports.install = function() {
	F.route('#homepage');
	F.route('#faq');
	F.route('#project');
	F.route('#contact');
	F.route('#report');
	F.route('#users');
	F.route('/profile', profileCtrl);
};

function profileCtrl() {

	var self = this;
	self.repository.firstname = 'Peter';
	self.view('profile', {
		"profileData": {
			"publicUserId": "facebook/petko.smolko",
			"username": "petko.smolko",
			"name": "Petko Smolko",
			"usernamesHistory": [],
			"namesHistory": [],
			"picture": "https://patroll.org/123456.png",
			"source": "facebook.com",
			"sourceProfileLink": "https://www.facebook.com/petko.smolko",
			"profileLink": "https://patroll.org/facebook/petko.smolko",
			"description": "There is always a better way",
			"profileType": "user",
			"deletedFlag": 0
		},
		"contributionStats": {
			"firstContribution": "2015-02-20T15:20:12.422Z",
			"latestContribution": "2017-05-31T15:20:12.422Z",
			"activeDaysCount": 15,
			"averageDailyActivity": 0.22643623300143267,
			"reportedCount": 71,
			"reportedByCount": 9,
			"reportedCountPerCategory": [{
				"category": "racism",
				"count": 6
			}, {
				"category": "sarcasm",
				"count": 26
			}],
			"contributionCount": 31,
			"postsCount": 0,
			"commentedPostsCount": 19,
			"commentedSourcesCount": 11,
			"conspirationContributionCount": 0
		},
		"reportingStats": {
			"reportCount": 7,
			"reportCountPerCategory": [{
				"category": "racism",
				"count": 40
			}, {
				"category": "sarcasm",
				"count": 28
			}],
			"reportContributionCount": 8,
			"reportSourcesCount": 8,
			"voteCount": 24,
			"voteCountPerCategory": [{
				"category": "racism",
				"count": 45
			}, {
				"category": "sarcasm",
				"count": 23
			}]
		}
	});
}