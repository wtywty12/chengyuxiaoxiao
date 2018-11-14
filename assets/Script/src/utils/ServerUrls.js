"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServerUrls = (function () {
    function ServerUrls() {
    }
    ServerUrls.REGISTER_URL = "user/register";
    ServerUrls.LOGIN_URL = "user/login";
    ServerUrls.CHECK_OFFLINE_GOLD_URL = "user/checkOfflineGold";
    ServerUrls.LOGOUT_URL = "user/logout";
    ServerUrls.GET_USER_URL = "user/getUserInfo";
    ServerUrls.HERO_OPEN_STORE_URL = "hero/openHeroStore";
    ServerUrls.HERO_BUY_URL = "hero/buyHero";
    ServerUrls.HERO_COMPOSITE_URL = "hero/composite";
    ServerUrls.HERO_SELL_URL = "hero/sellHero";
    ServerUrls.TOLLGATE_RECEIVE_GOLD_URL = "tollgate/receiveGold";
    ServerUrls.TOLLGATE_SYNC_BALL_HP_URL = "tollgate/syncBallHps";
    ServerUrls.RECEIVE_ACHIEVEMENT_REWARDS_URL = "achievement/receiveAchievementRewards";
    ServerUrls.TURNTABLE_ACTIVITY_START_TURN_URL = "activities/turntableActivityStartTurn";
    ServerUrls.OPEN_SHARE_TASK_URL = "task/openShareTask";
    ServerUrls.SHARE_URL = "task/share";
    return ServerUrls;
}());
exports.ServerUrls = ServerUrls;
