# Ana Sayfadaki Butonlar
```js
<View style={{flexDirection: 'row'}}>

    <TouchableOpacity
    onPress={() => props.navigation.navigate('Mentees')}
    style={styles.activeMentorshipsButton}>
    <View style={{alignItems: 'center'}}>
        <Text style={styles.buttonText}>Mentors</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={() => props.navigation.navigate('Mentors')}
    style={styles.activeMentorshipsButton}>
    <View style={{alignItems: 'center'}}>
        <Text style={styles.buttonText}>Mentors</Text>
    </View>
    </TouchableOpacity>

</View>
<View>
    <TouchableOpacity
    onPress={() => props.navigation.navigate('MentorMentee')}
    style={styles.activeButton}>
    <View style={{alignItems: 'center'}}>
        <Text style={styles.buttonText}>Mentors & Mentees</Text>
    </View>
    </TouchableOpacity>          
</View>
```

```json
{
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#ffc400'
} : styles.avatarView
```