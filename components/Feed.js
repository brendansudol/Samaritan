import * as React from 'react'
import { FlatList, StyleSheet, View, Animated, Dimensions } from 'react-native'

import NavigationBar from './NavigationBar'
import Text from './Text'
import { withTheme, StyleGuide } from './theme'

const { height } = Dimensions.get('window')
const keyExtractor = item => item.id

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

class Feed extends React.Component {
  state = {
    scrollAnimation: new Animated.Value(0),
  }

  renderItem = item => {
    const { renderItem } = this.props
    return renderItem(item.item)
  }

  render() {
    const { renderItem } = this
    const {
      data,
      title,
      navigation,
      theme,
      back,
      rightAction,
      header,
      numColumns,
      style,
      inverted,
    } = this.props
    const { scrollAnimation } = this.state

    const translateY = scrollAnimation.interpolate({
      inputRange: [55, 56, 57],
      outputRange: [55, 0, 0],
    })
    const backgroundScroll = scrollAnimation.interpolate({
      inputRange: [0, height],
      outputRange: [0, -height],
      extrapolate: 'clamp',
    })
    const onScroll = Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              y: scrollAnimation,
            },
          },
        },
      ],
      { useNativeDriver: true }
    )

    const titleStyle = back ? {} : { transform: [{ translateY }] }
    const top = theme.palette.primary
    const bottom = theme.palette.lightGray

    return (
      <View style={styles.flex}>
        <View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: bottom }}
        >
          {!back && (
            <Animated.View
              style={{
                flex: 1,
                backgroundColor: top,
                transform: [{ translateY: backgroundScroll }],
              }}
            />
          )}
        </View>
        <NavigationBar
          {...{ navigation, title, back, titleStyle, rightAction }}
        />
        <AnimatedFlatList
          contentContainerStyle={[styles.container, style]}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            !back && (
              <Animated.View style={{ backgroundColor: theme.palette.primary }}>
                <View style={styles.header}>
                  <Text type="title1" style={styles.headerText}>
                    {title}
                  </Text>
                </View>
                <View style={styles.extraHeader}>{header}</View>
              </Animated.View>
            )
          }
          scrollEventThrottle={1}
          columnWrapperStyle={
            numColumns && numColumns > 0 ? styles.columnWrapperStyle : undefined
          }
          {...{
            data,
            keyExtractor,
            renderItem,
            onScroll,
            numColumns,
            inverted,
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingBottom: StyleGuide.spacing.small,
    backgroundColor: StyleGuide.palette.lightGray,
  },
  header: {
    padding: StyleGuide.spacing.small,
  },
  headerText: {
    color: StyleGuide.palette.white,
  },
  extraHeader: {
    backgroundColor: StyleGuide.palette.white,
    ...StyleGuide.styles.shadow,
  },
  columnWrapperStyle: {
    marginRight: StyleGuide.spacing.small,
    marginTop: StyleGuide.spacing.small,
  },
})

export default withTheme(Feed)
