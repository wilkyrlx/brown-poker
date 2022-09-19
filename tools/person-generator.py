from bs4 import BeautifulSoup
import csv


# Takes in CSV data. <Replace Poker Website Team Page.csv> with relevant data
# Google form: https://docs.google.com/forms/d/e/1FAIpQLSdINce8g2cvGoa-hJG30sqk3K-hiq52CLF24IT3MLedzjVXGw/viewform?usp=sf_link 

with open('tools\input.csv', 'r') as file:

    reader_list = list(csv.reader(file))
    for row in reader_list[1:]:
        name = row[1]
        role = row[2]
        description = row[3]
        email = row[4]
        linkedin = row[5]
        image_name = row[7]

        # Open test.html for reading
        with open('tools\person-template.html') as html_file:
            soup = BeautifulSoup(html_file.read(), features='html.parser')
            
            # change name, role, class text
            soup.find("h5").string.replace_with(name)
            soup.find("div", {"class": "card-text"}).string.replace_with(role)
            soup.find("p").string.replace_with(description)

            # change mail and linkedin link
            soup.find("a", {"class": "mail"})['href'] = "mailto:" + email
            if (linkedin != ""):
                soup.find("a", {"class": "linkedin"})['href'] = linkedin
            else:
                soup.find("a", {"class": "linkedin"}).decompose()
                
            # change image
            soup.find("img")['src'] = "images\\headshots\\" + image_name
            
            unformatted_tag_list = []
            for i, tag in enumerate(soup.find_all(['h5', 'div'])):
                unformatted_tag_list.append(str(tag))
                tag.replace_with('{' + 'unformatted_tag_list[{0}]'.format(i) + '}')

            pretty_markup = soup.prettify().format(unformatted_tag_list=unformatted_tag_list)



        # Write new contents to test.html
        with open('tools\\generated\\' + name + '.html', mode='w') as new_html_file:
            new_html_file.write(pretty_markup)

