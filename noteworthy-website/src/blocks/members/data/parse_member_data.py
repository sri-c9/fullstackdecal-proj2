import csv
import json

PATH_TO_IMAGES = "noteworthy-website/src/blocks/members/data/member-images"


def csv_to_json(csv_file, json_file):
    # Open the CSV file
    with open(csv_file, 'r') as csvfile:
        # Read the CSV data
        csv_data = csv.DictReader(csvfile)
        # Convert CSV to JSON
        json_data = []
        for row in csv_data:
            match_image_to_member(row)
            json_data.append(row)

    # Write JSON data to a file
    with open(json_file, 'w') as jsonfile:
        json.dump(json_data, jsonfile, indent=4)


def match_image_to_member(row):
    lwc_first_name = row['Name'].split()[0].lower()
    image_path = f"{PATH_TO_IMAGES}/{lwc_first_name}.jpg"
    row["ImagePath"] = image_path


csv_to_json('noteworthy-website/src/blocks/members/data/input.csv',
            'noteworthy-website/src/blocks/members/data/output.json')
