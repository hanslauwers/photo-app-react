Rails.configuration.stripe = {
  :publishable_key => 'pk_test_JamOPlP4qjVjOKS5WcwZ40C1',
  :secret_key => 'sk_test_ZpJQDWpm2u3HXj81nC9Ie3YL'
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]