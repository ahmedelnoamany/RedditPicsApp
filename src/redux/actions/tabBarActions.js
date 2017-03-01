export function selectTab(data){
  if (data === "Posts"){
    return {
      type: "TAB_POSTS",
      payload: 'Tab1'
    }
  }
  else if (data === "Users"){
    return {
      type: "TAB_USERS",
      payload: 'Tab2'
    }
  }
  else if(data === "Settings"){
    return {
      type: "TAB_SETTINGS",
      payload: 'Tab3'
    }
  }
}
