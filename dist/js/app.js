/**
 *  Module
 *
 * Description
 */
var app = angular.module('app.Wom', ['firebase']);
/*var ref = new Firebase('https://who-owes-me.firebaseio.com/'); //Where data is stored
var usersRef = new Firebase('https://who-owes-me.firebaseio.com/users'); //Where user data is stored	
app.controller('SampleCtrl', ['$scope', '$firebaseObject', '$firebaseArray','$firebaseAuth', function($scope, $firebaseObject, $firebaseArray, $firebaseAuth) {
    $scope.authData = {};
    $scope.error = {};
    $scope.friendsList = {};
    //check if user is logged in with firebase
    ref.onAuth(function authDataCallback(authData) {
        if (authData) {
            console.log("User " + authData.uid + " is logged in with " + authData.provider);
            $scope.authData = {
                user: {
                    name: authData.google.displayName,
                    pic: authData.google.profileImageURL
                },
                token: authData.token,
                provider: authData.provider,
                uid: authData.uid
            };
        } else {
            console.log("User is logged out");
        }
    });
	
    /*
    $scope.login = function() {
            //Use google to authenticate, allow access to the user's email 
            auth.$authWithOAuthPopup("google", {
                scope: "email"
            }).then(function(authData) {
                //check if account is made
                console.log("auth data: ", authData);
                checkIfUserExists(authData);
                $scope.authData = {
                    user: {
                        name: authData.google.displayName,
                        pic: authData.google.profileImageURL
                    },
                    token: authData.token,
                    provider: authData.provider,
                    uid: authData.uid
                };
            });
        }
        //logout 
    $scope.logout = function() {
            ref.unauth();
            alert("Logged out");
            $scope.authData = null;
        }
        // Tests to see if /users/<userId> has any data. 
    function checkIfUserExists(authData) {
        usersRef.child(authData.uid).once('value', function(snapshot) {
            var exists = (snapshot.val() !== null);
            userExistsCallback(authData, exists); //send the authData and the boolean to userExistsCallback.
        });
    }

    function userExistsCallback(authData, exists) {
        if (exists) {
            alert('user ' + authData.google.id + ' exists!');
        } else {
            ref.child('users').child(authData.uid).set({ //create a new user at the user/<$uid>/ path
                google_id: authData.google.id,
                provider: authData.provider,
                name: authData.google.displayName,
                email: authData.google.email,
                pic: authData.google.profileImageURL
            });
        }
    }
    */
//}]); 
/*
//search for friends

$scope.search = {
	email: ''
};
//result of search is saved here
$scope.newFriend = {
	name: '',
	email: '',
	pic: '',
	uid: '',
	google_id: ''
}

$scope.searchUser = function() {
	if ($scope.search.email) {
		usersRef.orderByChild('email')
		.startAt($scope.search.email)
		.endAt($scope.search.email)
		.once( 'value', function(dataSnapshot) {
  			var foundUser = dataSnapshot.val();
  			var foundUserUid = Object.keys(foundUser);
  			foundUser = foundUser[foundUserUid];
  			$scope.$apply( $scope.newFriend = {
	  			name: foundUser.name,
	  			email: foundUser.email,
	  			pic: foundUser.pic,
	  			uid: foundUserUid[0],
	  			google_id: foundUser.google_id
  			});
  		console.log($scope.newFriend);
}, function(err) {
	if (err) {
		console.log(err);
		$scope.error.message = err;
	}
});	
	} else {
		$scope.error.message = "Please Enter a valid email";
	}
}

$scope.addFriend = function() {
	ref.child('users')
	.child($scope.authData.uid)
	.child('friends')
	.child($scope.newFriend.uid)
	.set($scope.newFriend);
	$scope.newFriend = {};
}

$scope.listFriends= function (){
	var friendsRef = usersRef.child($scope.authData.uid).child('friends/');
	var friendsList;
friendsRef.once( 'value', function(dataSnapshot) {
		friendsList = dataSnapshot.val();
		console.log(friendsList);	
		var objectIndicies = Object.keys(friendsList); //store $id's in an aray.
		console.log(objectIndicies);
  		for (var i = 0; i < Object.keys(friendsList).length; i++) {
				$scope.friendsList = { };
				var $id = friendsList[objectIndicies[i]].google_id;
				var name = friendsList[objectIndicies[i]].name;
				var email = friendsList[objectIndicies[i]].email;
				console.log(friendsList[objectIndicies[i]]);
				jsonObj[data[i].id] = data[i].name;

				/*$scope.friendsList = {

						id:  $id,
						name: name,
						email: email
				};
	}
					console.log($scope.friendsList[0]);	

 });



}


app.factory('ListFriends', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
	var getFriendsList = function(){
		var friendsRef = usersRef.child($scope.authData.uid).child('friends');
		var friendsList = $firebaseArray(friendsRef);
		console.dir(friendsList);
	}
	return getFriendsList;
}]);

*/