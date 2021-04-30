import React from 'react';
import {View} from 'react-native';
import {Colors, List, Text} from 'react-native-paper';
import {Padding} from '../../Components/PaddingComponent';
import {Title} from '../../Components/TitleComponent';

const ListScreen = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View>
      <Padding>
        <Title>List Accordion</Title>
        <List.Section title="Accordions">
          <List.Accordion
            title="Uncontrolled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </Padding>
      <Padding>
        <Title>List Accordion Group</Title>
        <List.AccordionGroup>
          <List.Accordion title="Accordion 1" id="1">
            <List.Item title="Item 1" />
          </List.Accordion>
          <List.Accordion title="Accordion 2" id="2">
            <List.Item title="Item 2" />
          </List.Accordion>
          <View>
            <Text>
              List.Accordion can be wrapped because implementation uses
              React.Context.
            </Text>
            <List.Accordion title="Accordion 3" id="3">
              <List.Item title="Item 3" />
            </List.Accordion>
          </View>
        </List.AccordionGroup>
      </Padding>
      <Padding>
        <Title>List Icon</Title>
        <List.Icon color={Colors.blue500} icon="folder" />
        <List.Icon color={Colors.blue500} icon="equal" />
        <List.Icon color={Colors.blue500} icon="calendar" />
      </Padding>
      <Padding>
        <Title>List Section</Title>
        <List.Section>
          <List.Subheader>Some title</List.Subheader>
          <List.Item
            title="First Item"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Item
            title="Second Item"
            left={() => <List.Icon color="#000" icon="folder" />}
          />
        </List.Section>
      </Padding>
    </View>
  );
};

export default ListScreen;
