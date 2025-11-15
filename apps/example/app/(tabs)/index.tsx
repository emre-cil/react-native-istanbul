import { Image } from 'expo-image';
import { Platform, StyleSheet, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Button, useTheme } from 'react-native-istanbul';

export default function HomeScreen() {
  const { theme, toggleTheme, themeMode } = useTheme();
  const variants: Array<'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'danger'> = [
    'primary',
    'secondary',
    'tertiary',
    'outline',
    'ghost',
    'danger',
  ];
  const sizes: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Theme Provider</ThemedText>
        <ThemedText>
          Current theme mode: <ThemedText type="defaultSemiBold">{themeMode}</ThemedText>
        </ThemedText>
        <ThemedText>
          Is dark mode: <ThemedText type="defaultSemiBold">{theme.isDark ? 'Yes' : 'No'}</ThemedText>
        </ThemedText>
        <Button variant="primary" onPress={toggleTheme}>
          Toggle Theme
        </Button>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Button Variants</ThemedText>
        <ThemedText>All button variants with default size (md):</ThemedText>
        <View style={styles.buttonGroup}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant} onPress={() => alert(`${variant} pressed`)}>
              {variant}
            </Button>
          ))}
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Button Sizes</ThemedText>
        <ThemedText>All button sizes with primary variant:</ThemedText>
        <View style={styles.buttonGroup}>
          {sizes.map((size) => (
            <Button key={size} variant="primary" size={size} onPress={() => alert(`${size} pressed`)}>
              {size}
            </Button>
          ))}
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Button States</ThemedText>
        <ThemedText>Disabled and loading states:</ThemedText>
        <View style={styles.buttonGroup}>
          <Button variant="primary" isDisabled>
            Disabled
          </Button>
          <Button variant="primary" isLoading>
            Loading
          </Button>
          <Button variant="outline" isDisabled>
            Disabled Outline
          </Button>
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Buttons with Icons</ThemedText>
        <ThemedText>Buttons with left and right icons:</ThemedText>
        <View style={styles.buttonGroup}>
          <Button
            variant="primary"
            leftIcon={<Ionicons name="add" size={20} color="#FFFFFF" />}
            onPress={() => alert('Add pressed')}>
            Add Item
          </Button>
          <Button
            variant="secondary"
            rightIcon={<Ionicons name="arrow-forward" size={20} color="#FFFFFF" />}
            onPress={() => alert('Continue pressed')}>
            Continue
          </Button>
          <Button
            variant="outline"
            leftIcon={<Ionicons name="heart" size={20} color={theme.colors.primary} />}
            rightIcon={<Ionicons name="chevron-forward" size={20} color={theme.colors.primary} />}
            onPress={() => alert('Like pressed')}>
            Like
          </Button>
        </View>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">All Combinations</ThemedText>
        <ThemedText>All variant and size combinations:</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            {variants.map((variant) => (
              <View key={variant} style={styles.combinationRow}>
                <ThemedText style={styles.variantLabel}>{variant}:</ThemedText>
                <View style={styles.combinationButtons}>
                  {sizes.map((size) => (
                    <Button
                      key={`${variant}-${size}`}
                      variant={variant}
                      size={size}
                      onPress={() => alert(`${variant} ${size}`)}
                      style={{ marginRight: 8 }}>
                      {size}
                    </Button>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonGroup: {
    gap: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  combinationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  variantLabel: {
    width: 80,
    textTransform: 'capitalize',
  },
  combinationButtons: {
    flexDirection: 'row',
    flex: 1,
  },
});
