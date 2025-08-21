import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../constants/Colors.js';

const ContentCard = ({ game }:any) => {
    if (!game) {
        return null;
    }

    return (
        <TouchableOpacity>
        <View style={styles.cardContainer}>
            <Image
                source={{ uri: game.game_image || 'https://placekitten.com/400/300' }}
                style={styles.cardImage}
                resizeMode="cover"
            />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{game.name}</Text>
                
                <View style={styles.scoreBadge}>
                    <Text style={styles.scoreText}>{game.score}</Text>
                </View>

                <View style={styles.categoryContainer}>
                    {game.category?.map((cat:any, index:any) => (
                        <View key={index} style={styles.categoryTag}>
                            <Text style={styles.categoryText}>{cat}</Text>
                        </View>
                    ))}
                </View>
                
                <Text style={styles.cardDescription} numberOfLines={2}>
                    {game.description}
                </Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: globalStyles.tabBackground,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 16,
        marginHorizontal: 16,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardImage: {
        width: '100%',
        height: 180,
    },
    cardContent: {
        padding: 12,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: globalStyles.forText,
        marginBottom: 8,
    },
    scoreBadge: {
        backgroundColor: '#28A745',
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        position: 'absolute',
        top: 12,
        right: 12,
    },
    scoreText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    categoryTag: {
        backgroundColor: '#eeeeee',
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginRight: 6,
        marginBottom: 6,
    },
    categoryText: {
        fontSize: 12,
        color: '#555555',
    },
    cardDescription: {
        fontSize: 14,
        color: globalStyles.forText,
        lineHeight: 20,
    },
});

export default ContentCard;