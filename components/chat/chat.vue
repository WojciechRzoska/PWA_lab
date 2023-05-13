<template>
  <div class="container">
    <template v-if="showChat">
      <div class="chat_container">
        <div class="chat_header">
          <h2>Chat</h2>
          <div class="chat_closer" @click="showChat = false">x</div>
        </div>
        <div class="chat_content"></div>
        <div class="chat_input"></div>
      </div>
    </template>
    <template v-else>
      <div class="open_button" @click="showChat = true">Chat</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Chat",

  data() {
    return {
      showChat: true,
    };
  },
};
</script>

<style lang="css" scoped>
.open_button {
  position: fixed;
  bottom: 25px;
  right: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background: #222831;

  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;

  width: 50px;
  height: 50px;

  border-radius: 50%;
}

.chat_container {
  position: fixed;
  bottom: 25px;
  right: 25px;

  background: white;
  color: black;

  width: 300px;
  height: 400px;

  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);

  overflow: hidden;
}

.chat_header {
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #222831;
  color: white;

  height: 50px;

  padding: 10px;
}

.chat_closer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
</style>
