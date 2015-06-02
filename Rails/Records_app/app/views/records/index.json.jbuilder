json.array!(@records) do |record|
  json.extract! record, :id, :band, :title, :year, :bought
  json.url record_url(record, format: :json)
end
