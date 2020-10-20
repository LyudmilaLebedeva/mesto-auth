const linkPattern = /https?:\/\/(((www\.)?[a-z\d][a-z\d-]*\.[a-z]{2,})|(((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)))((?!:0+)(:([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])))?((\/[a-z\d-]+)*[/#]?)?/;

// Для валидации ссылок в разных схемах

const linkValidator = {
  validator(v) {
    return linkPattern.test(v);
  },
  message: (props) => `${props.value} is not a valid link!`,
};

module.exports = linkValidator;
