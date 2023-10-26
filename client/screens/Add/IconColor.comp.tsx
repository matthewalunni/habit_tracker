import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {padding, margin, borderRadius, color} from '../../theme';
import {useRef} from 'react';
import {BottomSheet, BottomSheetRef} from 'react-native-sheet';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import Text from '../../components/Text.comp';

const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#CC80CC',
];

const icons = [
  'glass',
  'music',
  'search',
  'envelope-o',
  'heart',
  'star',
  'star-o',
  'user',
  'film',
  'th-large',
  'th',
  'th-list',
  'check',
  'remove',
  'close',
  'times',
  'search-plus',
  'search-minus',
  'power-off',
  'signal',
  'gear',
  'cog',
  'trash-o',
  'home',
  'file-o',
  'clock-o',
  'road',
  'download',
  'arrow-circle-o-down',
  'arrow-circle-o-up',
  'inbox',
  'play-circle-o',
  'rotate-right',
  'repeat',
  'refresh',
  'list-alt',
  'lock',
  'flag',
  'headphones',
  'volume-off',
  'volume-down',
  'volume-up',
  'qrcode',
  'barcode',
  'tag',
  'tags',
  'book',
  'bookmark',
  'print',
  'camera',
  'font',
  'bold',
  'italic',
  'text-height',
  'text-width',
  'align-left',
  'align-center',
  'align-right',
  'align-justify',
  'list',
  'dedent',
  'outdent',
  'indent',
  'video-camera',
  'photo',
  'image',
  'picture-o',
  'pencil',
  'map-marker',
  'adjust',
  'tint',
  'edit',
  'pencil-square-o',
  'share-square-o',
  'check-square-o',
  'arrows',
  'step-backward',
  'fast-backward',
  'backward',
  'play',
  'pause',
  'stop',
  'forward',
  'fast-forward',
  'step-forward',
  'eject',
  'chevron-left',
  'chevron-right',
  'plus-circle',
  'minus-circle',
  'times-circle',
  'check-circle',
  'question-circle',
  'info-circle',
  'crosshairs',
  'times-circle-o',
  'check-circle-o',
  'ban',
];

const IconColor = () => {
  const bottomColorSheet = useRef<BottomSheetRef>(null);
  const bottomIconSheet = useRef<BottomSheetRef>(null);
  return (
    <View style={{paddingVertical: padding.md}}>
      <Text style={{marginBottom: margin.sm}}>Icon and Color</Text>
      <View style={[styles.center, styles.row]}>
        <TouchableOpacity
          onPress={() => {
            bottomColorSheet.current?.show();
          }}
          style={[styles.halfButton, {marginRight: margin.sm}]}>
          <Text>Color</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            bottomIconSheet.current?.show();
          }}
          style={[styles.halfButton, {marginLeft: margin.sm}]}>
          <Text>Icon</Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        sheetStyle={{
          backgroundColor: color.background,
        }}
        height={400}
        ref={bottomColorSheet}>
        <View style={[styles.center, styles.row, {flexWrap: 'wrap'}]}>
          {colors.map(colorValue => (
            <TouchableOpacity
              key={colorValue}
              style={[
                styles.swatch,
                {
                  backgroundColor: colorValue,
                },
              ]}
            />
          ))}
        </View>
      </BottomSheet>

      <BottomSheet
        sheetStyle={{
          backgroundColor: color.background,
        }}
        height={600}
        ref={bottomIconSheet}>
        <ScrollView>
          <View style={[styles.center, styles.row, {flexWrap: 'wrap'}]}>
            {icons.map(icon => (
              <TouchableOpacity
                key={icon}
                style={[
                  styles.swatch,
                  {
                    backgroundColor: color.background,
                  },
                ]}>
                <Icon name={icon} size={30} color={color.primary} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  halfButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: padding.lg,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: color.primary,
  },
  swatch: {
    width: 40,
    height: 40,
    margin: margin.md,
    borderRadius: borderRadius.md,
  },
});

export default IconColor;
