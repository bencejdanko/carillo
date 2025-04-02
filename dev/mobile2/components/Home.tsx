import { EllipsisVertical, Plus, PlusCircle } from 'lucide-react-native';
import {
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { View } from 'react-native';
import { Input } from '~/components/ui/input';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

import { useColorScheme } from '~/lib/useColorScheme';

export default function Home({ navigation }: any) {

    const { isDarkColorScheme } = useColorScheme();

    let posts = [{
        id: 1,
        avatar: 'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg',
        avatarFallback: 'RS',
        name: 'Rick Sanchez',
        postImage: 'https://as2.ftcdn.net/v2/jpg/05/52/90/99/1000_F_552909948_WnyjkgiiHOlcuBQLdOopcCKBPEd4Il0A.jpg',
        likes: 100,
        comments: 50,
        shares: 10,
        description: 'This image shows a scientist named Rick Sanchez. He is a freelance scientist. He is from dimension C-137. He is 70 years old and is a human.',
    },

    {
        id: 2,
        avatar: 'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg',
        avatarFallback: 'RS',
        name: 'Rick Sanchez',
        postImage: 'https://as2.ftcdn.net/v2/jpg/05/52/90/99/1000_F_552909948_WnyjkgiiHOlcuBQLdOopcCKBPEd4Il0A.jpg',
        likes: 100,
        comments: 50,
        shares: 10,
        description: 'This image shows a scientist named Rick Sanchez. He is a freelance scientist. He is from dimension C-137. He is 70 years old and is a human.',
    }
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View>
                <PlusCircle size={24} strokeWidth={2} color={ isDarkColorScheme ? 'black': 'white'} />
            </View>

            <ScrollView>
                <Button
                    onPress={() => navigation.navigate('Auth')}
                ><Text>Back to auth</Text>
                </Button>
                <Image source={require('~/assets/images/carrillo.svg')} />

                {posts.map((post, index) => (
                    <Card key={index}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Avatar className='m-1' alt={post.avatarFallback} style={{ width: 34, height: 34 }}>
                                    <AvatarImage source={{ uri: post.avatar }} />
                                    <AvatarFallback>
                                        <Text>RS</Text>
                                    </AvatarFallback>
                                </Avatar>
                                <Text>{post.name}</Text>
                            </View>

                            <EllipsisVertical className='pr-5' color={ isDarkColorScheme ? 'white': 'black'} />

                        </View>



                        <Image source={{ uri: post.postImage }} style={{ width: '100%', height: 200 }} />
                        <CardContent className='p-4'>
                            <CardDescription className="text-md">
                                <Text>{post.description}</Text></CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Text>{post.likes} Likes</Text>
                            <Text>{post.comments} Comments</Text>
                            <Text>{post.shares} Shares</Text>
                        </CardFooter>


                    </Card>

                ))}
            </ScrollView>
        </SafeAreaView>
    );

}
