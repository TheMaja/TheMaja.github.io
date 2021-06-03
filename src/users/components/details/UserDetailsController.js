class UserDetailsController {
  /**
   * Constructor
   *
   * @param $mdBottomSheet
   * @param $log
   */
  constructor($mdBottomSheet, $log) {
    this.$mdBottomSheet = $mdBottomSheet;
    this.$log = $log;
  }

  /**
   * Show the bottom sheet
   */
  share() {
    var user = this.selected;
    var $mdBottomSheet = this.$mdBottomSheet;

    $mdBottomSheet
      .show({
        parent: angular.element(document.getElementById("content")),
        templateUrl: "src/users/components/details/ContactSheet.html",
        controller: ["$mdBottomSheet", UserSheetController],
        controllerAs: "$ctrl",
        bindToController: true,
      })
      .then((clickedItem) => {
        this.$log.debug(clickedItem.name + " clicked!");
      });

    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    function UserSheetController($mdBottomSheet) {
      this.user = user;
      this.items = [
        {
          name: "Phone:   0711825511",
          icon: "phone",
          icon_url: "assets/svg/phone.svg",
        },
        {
          name: "Twitter:  @BigBoyThemba",
          icon: "twitter",
          icon_url: "assets/svg/twitter.svg",
        },
        {
          name: "Email:  Majawonke@gmail.com",
          icon: "google_plus",
          icon_url: "assets/svg/google_plus.svg",
        },
      ];
      this.performAction = (action) => {
        $mdBottomSheet.hide(action);
      };
    }
  }
}
export default UserDetailsController;
