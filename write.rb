require 'google/apis/sheets_v4'


  service = Google::Apis::SheetsV4::SheetsService.new
  service.client_options.application_name = 'client'
  service.key = ENV['GAPI_KEY']


  spreadsheet_id = '1YQl8P_1rewKnnezt8ttjBcfONvRw0XkmJKrjGr76Oqs'
  data = service.get_spreadsheet_values(spreadsheet_id,"A:Z").values

  rows = data.slice(1,data.length).each_with_index.map do |values, index|
    {
      "key": index,
      "name":  values[0] || "",
      "steps": {
      "not_started":  values[1] || "",
      "incomplete":  values[2] || "",
      "completed":  values[3] || ""
      },
      "status":  values[4] || "",
      "difficulty":  values[5] || "",
      "not_started_link":  values[6] || "",
      "incomplete_link":  values[7] || "",
      "completed_link":  values[8] || "",
      "sectors":  values[9] ? values[9].split(",").map{|t| t.strip} : []
    }
  end

  File.write('public/reforms.json', rows.to_json, mode: 'w')
