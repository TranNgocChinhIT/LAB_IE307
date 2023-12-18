import React, { useState } from 'react';
import { View, Text, Button, Image, Platform, StyleSheet, FlatList, ImageBackground, SectionList } from 'react-native';
import { fruits_vegetables, workouts } from './data';

const Lab1_2 = () => {
    const [selectedExercises, setSelectedExercises] = useState([]);

    const toggleExerciseSelection = (exercise) => {
        // Kiểm tra nếu exercise đc nhấn đã có trong danh sách rồi thì bỏ ra
        // Ngc lại, thêm vào danh sách nếu chưa có
        
        // Logic ...
        setSelectedExercises(
          // Logic ...
        );
    };

    // Hàm renderItem cho FlatList và SectionList
    const renderItem = ({ item }) => (
        <View>
            <Text>
                    {/* truyền giá trị tương ứng với của FlatList / SectionList */}
                    Đổi giá trị ở đây
            </Text>
            <View>
                <Button
                  title="Đổi title tương ứng"
                  onPress={() => {}}
                    // title={ nếu exercise đã đc nhấn ? 'Deselect' : 'Select'}
                    // onPress={() => toggleExerciseSelection(
                    //   truyền giá trị tương ứng với của FlatList / SectionList)
                    // }
                />
            </View>
        </View>
    );

    const renderSectionHeader = ({ section }) => (
        <View>
            <Text>{section.title}</Text>
            <Image source={{ uri: section.url }} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text>
                FlatList - Workouts
            </Text>

            <ImageBackground style={styles.backgroundImage}
                source={{ uri: 'https://www.uit.edu.vn/sites/vi/files/banner_uit.png' }}>
                <FlatList
                    data={workouts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    style={styles.listView}
                />
            </ImageBackground>

            <Text>
                SectionList - Fruits & Vegetables
            </Text>

            <ImageBackground style={styles.backgroundImage}
                source={{ uri: 'https://www.uit.edu.vn/sites/vi/files/banner_uit.png' }} >
                <SectionList
                    sections={fruits_vegetables}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    keyExtractor={(item, index) => item + index}
                    style={styles.listView}
                />
            </ImageBackground>

            <Text>
                <Text>SELECTED EXERCISES: {'\n'}</Text>
                {selectedExercises.join(', ')}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 35,
        marginBottom: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginBottom: 10,
    },
    listView: {
        ...Platform.select({
            ios: {
                maxHeight: 280,
            },
            android: {
                maxHeight: 260,
            },
            default: {
                maxHeight: 170,
            },
        }),
        marginBottom: 15,
        width: 320,
    },
});

export default Lab1_2;