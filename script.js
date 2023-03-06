const onEmailLoad = () => {
  console.log('Email is loaded!');
};

const onEmailUnsubscribe = (event) => {
  console.log(event.target);
  const creatorEmail = event.target.getAttribute('data-sender');
  const consumerEmail = event.target.getAttribute('data-receiver');
  console.log(creatorEmail, consumerEmail);
};
