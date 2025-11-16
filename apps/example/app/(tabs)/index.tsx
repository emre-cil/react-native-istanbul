import { StyleSheet, View, ScrollView } from "react-native";
import {
  Button,
  Typography,
  Divider,
  Badge,
  Chip,
  ProgressBar,
  Spacer,
  Card,
  Avatar,
  TextInput,
  useTheme,
  type ButtonVariant,
  type TypographyVariant,
} from "react-native-istanbul";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const variants: ButtonVariant[] = [
  "primary",
  "secondary",
  "tertiary",
  "surface",
  "outline",
  "ghost",
  "danger",
  "liquidGlass",
];

const sizes: ("sm" | "md" | "lg")[] = ["sm", "md", "lg"];

const typographyVariants: TypographyVariant[] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "body",
  "bodySmall",
  "caption",
  "overline",
];

export default function HomeScreen() {
  const { theme, toggleTheme, themeMode } = useTheme();

  // TextInput states
  const [textInput1, setTextInput1] = useState("");
  const [textInput2, setTextInput2] = useState("");
  const [textInput3, setTextInput3] = useState("");
  const [textInput4, setTextInput4] = useState("");
  const [textInput5, setTextInput5] = useState("");
  const [textInput6, setTextInput6] = useState("");
  const [textInput7, setTextInput7] = useState("");
  const [textInput8, setTextInput8] = useState("");
  const [textInput9, setTextInput9] = useState("");
  const [textInput10, setTextInput10] = useState("");
  const [textInput11, setTextInput11] = useState("");
  const [textInput12, setTextInput12] = useState("");
  const [textInput13, setTextInput13] = useState("");
  const [textInput14, setTextInput14] = useState("");
  const [textInput15, setTextInput15] = useState("");

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Typography variant="h1" color="text">
          React Native İstanbul
        </Typography>
        <Typography variant="h4" color="textSecondary">
          UI Component Library
        </Typography>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Theme
        </Typography>
        <Typography variant="body" color="textSecondary">
          Current mode: {themeMode}
        </Typography>
        <Typography variant="body" color="textSecondary">
          Is dark: {theme.isDark ? "Yes" : "No"}
        </Typography>
        <Button variant="primary" onPress={toggleTheme} style={styles.button}>
          Toggle Theme
        </Button>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Font Comparison
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          System font vs Poppins font (side by side):
        </Typography>
        <View style={styles.fontComparisonContainer}>
          <View
            style={[
              styles.fontComparisonColumn,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Typography variant="caption" color="textTertiary" align="center">
              System Font
            </Typography>
            <Typography variant="h1" color="text" style={{ fontFamily: "" }}>
              Heading 1
            </Typography>
            <Typography variant="h2" color="text" style={{ fontFamily: "" }}>
              Heading 2
            </Typography>
            <Typography variant="body" color="text" style={{ fontFamily: "" }}>
              Body text with system font
            </Typography>
          </View>
          <View
            style={[
              styles.fontComparisonColumn,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <Typography variant="caption" color="textTertiary" align="center">
              Poppins Font
            </Typography>
            <Typography variant="h1" color="text">
              Heading 1
            </Typography>
            <Typography variant="h2" color="text">
              Heading 2
            </Typography>
            <Typography variant="body" color="text">
              Body text with Poppins
            </Typography>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Poppins Font Language Support
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Poppins supports Latin and Devanagari scripts. Examples from top 20
          languages:
        </Typography>
        <View style={styles.languageContainer}>
          {[
            { lang: "English", text: "Hello", script: "Latin" },
            { lang: "Spanish", text: "Hola", script: "Latin" },
            { lang: "Portuguese", text: "Olá", script: "Latin" },
            { lang: "French", text: "Bonjour", script: "Latin" },
            { lang: "German", text: "Hallo", script: "Latin" },
            { lang: "Italian", text: "Ciao", script: "Latin" },
            { lang: "Turkish", text: "Merhaba", script: "Latin" },
            { lang: "Dutch", text: "Hallo", script: "Latin" },
            { lang: "Polish", text: "Cześć", script: "Latin" },
            { lang: "Romanian", text: "Salut", script: "Latin" },
            { lang: "Czech", text: "Ahoj", script: "Latin" },
            { lang: "Swedish", text: "Hej", script: "Latin" },
            { lang: "Norwegian", text: "Hei", script: "Latin" },
            { lang: "Finnish", text: "Hei", script: "Latin" },
            { lang: "Vietnamese", text: "Xin chào", script: "Latin" },
            { lang: "Indonesian", text: "Halo", script: "Latin" },
            { lang: "Hindi", text: "नमस्ते", script: "Devanagari" },
            { lang: "Marathi", text: "नमस्कार", script: "Devanagari" },
            { lang: "Nepali", text: "नमस्ते", script: "Devanagari" },
            {
              lang: "Russian",
              text: "Привет",
              script: "Cyrillic",
              supported: false,
            },
          ].map((item, index) => (
            <View
              key={index}
              style={[
                styles.languageItem,
                { backgroundColor: theme.colors.surface },
              ]}
            >
              <Typography variant="caption" color="textTertiary">
                {item.lang} ({item.script})
              </Typography>
              {item.supported === false ? (
                <View style={styles.unsupportedContainer}>
                  <Typography
                    variant="body"
                    color="text"
                    style={{ fontFamily: "" }}
                  >
                    {item.text}
                  </Typography>
                  <Typography variant="caption" color="error">
                    (System font - Poppins doesn&apos;t support {item.script})
                  </Typography>
                </View>
              ) : (
                <Typography variant="body" color="text">
                  {item.text}
                </Typography>
              )}
            </View>
          ))}
        </View>
        <Typography variant="caption" color="textTertiary" style={styles.note}>
          Note: Poppins supports Latin and Devanagari scripts. For Cyrillic,
          Arabic, Chinese, Japanese, Korean, and other scripts, system fonts or
          specialized fonts are needed.
        </Typography>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Typography Variants
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          All typography variants:
        </Typography>
        <View style={styles.typographyContainer}>
          {typographyVariants.map((variant) => (
            <View key={variant} style={styles.typographyItem}>
              <Typography variant="caption" color="textTertiary">
                {variant}:
              </Typography>
              <Typography variant={variant} color="text">
                The quick brown fox jumps over the lazy dog
              </Typography>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Typography Sizes
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Custom font sizes:
        </Typography>
        <View style={styles.typographyContainer}>
          <Typography size="xs" color="text">
            Extra Small (xs)
          </Typography>
          <Typography size="sm" color="text">
            Small (sm)
          </Typography>
          <Typography size="md" color="text">
            Medium (md)
          </Typography>
          <Typography size="lg" color="text">
            Large (lg)
          </Typography>
          <Typography size="xl" color="text">
            Extra Large (xl)
          </Typography>
          <Typography size="xxl" color="text">
            Extra Extra Large (xxl)
          </Typography>
          <Typography size="xxxl" color="text">
            Extra Extra Extra Large (xxxl)
          </Typography>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Typography Weights
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Custom font weights:
        </Typography>
        <View style={styles.typographyContainer}>
          <Typography weight="regular" color="text">
            Regular weight
          </Typography>
          <Typography weight="medium" color="text">
            Medium weight
          </Typography>
          <Typography weight="semibold" color="text">
            Semibold weight
          </Typography>
          <Typography weight="bold" color="text">
            Bold weight
          </Typography>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Typography Colors
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Using theme colors:
        </Typography>
        <View style={styles.typographyContainer}>
          <Typography color="primary">Primary color</Typography>
          <Typography color="secondary">Secondary color</Typography>
          <Typography color="tertiary">Tertiary color</Typography>
          <Typography color="success">Success color</Typography>
          <Typography color="warning">Warning color</Typography>
          <Typography color="error">Error color</Typography>
          <Typography color="text">Text color</Typography>
          <Typography color="textSecondary">Text secondary</Typography>
          <Typography color="textTertiary">Text tertiary</Typography>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Typography Alignment
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Text alignment options:
        </Typography>
        <View style={styles.typographyContainer}>
          <Typography align="left" color="text">
            Left aligned text
          </Typography>
          <Typography align="center" color="text">
            Center aligned text
          </Typography>
          <Typography align="right" color="text">
            Right aligned text
          </Typography>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Typography Truncation
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Text with numberOfLines:
        </Typography>
        <View style={styles.typographyContainer}>
          <Typography numberOfLines={1} color="text">
            This is a very long text that will be truncated after one line. It
            should show ellipsis at the end.
          </Typography>
          <Typography numberOfLines={2} color="text">
            This is a very long text that will be truncated after two lines. It
            should show ellipsis at the end if the text is too long to fit in
            two lines.
          </Typography>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          All Button Variants
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          All variants with default size (md):
        </Typography>
        <View style={styles.buttonGroup}>
          {variants.map((variant) => (
            <Button
              key={variant}
              variant={variant}
              onPress={() => {}}
              style={styles.buttonItem}
            >
              {variant}
            </Button>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          All Button Sizes
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          All sizes with primary variant:
        </Typography>
        <View style={styles.buttonGroup}>
          {sizes.map((size) => (
            <Button
              key={size}
              variant="primary"
              size={size}
              onPress={() => {}}
              style={styles.buttonItem}
            >
              {size}
            </Button>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Button States
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Disabled and loading states:
        </Typography>
        <View style={styles.buttonGroup}>
          <Button variant="primary" isDisabled style={styles.buttonItem}>
            Disabled
          </Button>
          <Button variant="primary" isLoading style={styles.buttonItem}>
            Loading
          </Button>
          <Button variant="outline" isDisabled style={styles.buttonItem}>
            Disabled Outline
          </Button>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          All Combinations
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          All variant and size combinations:
        </Typography>
        {variants.map((variant) => (
          <View key={variant} style={styles.combinationRow}>
            <Typography
              variant="caption"
              color="textSecondary"
              style={styles.variantLabel}
            >
              {variant}:
            </Typography>
            <View style={styles.combinationButtons}>
              {sizes.map((size) => (
                <Button
                  key={`${variant}-${size}`}
                  variant={variant}
                  size={size}
                  onPress={() => {}}
                  style={styles.combinationButton}
                >
                  {size}
                </Button>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Divider
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Horizontal and vertical dividers:
        </Typography>
        <View style={styles.componentContainer}>
          <Typography variant="body" color="text">
            Content above
          </Typography>
          <Divider />
          <Typography variant="body" color="text">
            Content below
          </Typography>
          <Divider variant="dashed" spacingBefore="md" spacingAfter="md" />
          <Typography variant="body" color="text">
            Dashed divider with spacing
          </Typography>
          <Divider text="OR" />
          <View style={styles.horizontalContainer}>
            <Typography variant="body" color="text">
              Left
            </Typography>
            <Divider
              orientation="vertical"
              thickness={2}
              style={{ height: 40 }}
            />
            <Typography variant="body" color="text">
              Right
            </Typography>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Badge
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Badge variants and sizes:
        </Typography>
        <View style={styles.componentContainer}>
          <View style={styles.badgeRow}>
            <Badge variant="dot" />
            <Badge variant="number" content={5} />
            <Badge variant="number" content={99} />
            <Badge variant="number" content={150} maxCount={99} />
            <Badge variant="text" content="New" />
          </View>
          <View style={styles.badgeRow}>
            <Badge variant="number" content={5} size="sm" />
            <Badge variant="number" content={5} size="md" />
            <Badge variant="number" content={5} size="lg" />
          </View>
          <View style={styles.badgeRow}>
            <Badge variant="number" content={5} color="primary" />
            <Badge variant="number" content={5} color="secondary" />
            <Badge variant="number" content={5} color="error" />
            <Badge variant="number" content={5} color="warning" />
            <Badge variant="number" content={5} color="success" />
          </View>
          <View style={styles.badgeOverlayContainer}>
            <Badge content={5} position="top-right">
              <Button variant="primary">Notifications</Button>
            </Badge>
            <Badge variant="dot" position="top-right">
              <Button variant="secondary">Messages</Button>
            </Badge>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Chip / Tag
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Chip variants and features:
        </Typography>
        <View style={styles.componentContainer}>
          <View style={styles.chipRow}>
            <Chip label="Filled" variant="filled" />
            <Chip label="Outlined" variant="outlined" />
            <Chip
              label="Liquid Glass"
              variant="liquidGlass"
              onPress={() => {}}
            />
          </View>
          <View style={styles.chipRow}>
            <Chip label="Small" size="sm" />
            <Chip label="Medium" size="md" />
            <Chip label="Large" size="lg" />
          </View>
          <View style={styles.chipRow}>
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Tertiary" color="tertiary" />
          </View>
          <View style={styles.chipRow}>
            <Chip label="Deletable" deletable onDelete={() => {}} />
            <Chip
              label="Deletable"
              variant="outlined"
              deletable
              onDelete={() => {}}
            />
          </View>
          <View style={styles.chipRow}>
            <Chip label="Disabled" isDisabled />
            <Chip label="Disabled" variant="outlined" isDisabled />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Progress Bar
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Progress indicators:
        </Typography>
        <View style={styles.componentContainer}>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              0%
            </Typography>
            <ProgressBar value={0} />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              25%
            </Typography>
            <ProgressBar value={25} />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              50%
            </Typography>
            <ProgressBar value={50} />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              75%
            </Typography>
            <ProgressBar value={75} />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              100%
            </Typography>
            <ProgressBar value={100} />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              With label
            </Typography>
            <ProgressBar value={65} showLabel />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              Indeterminate
            </Typography>
            <ProgressBar variant="indeterminate" />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              Sizes
            </Typography>
            <ProgressBar value={50} size="sm" />
            <Spacer size="sm" />
            <ProgressBar value={50} size="md" />
            <Spacer size="sm" />
            <ProgressBar value={50} size="lg" />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              Colors
            </Typography>
            <ProgressBar value={60} color="primary" />
            <Spacer size="xs" />
            <ProgressBar value={60} color="success" />
            <Spacer size="xs" />
            <ProgressBar value={60} color="warning" />
            <Spacer size="xs" />
            <ProgressBar value={60} color="error" />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              Gradient Variants
            </Typography>
            <ProgressBar value={50} gradient color="primary" />
            <Spacer size="xs" />
            <ProgressBar value={60} gradient color="secondary" />
            <Spacer size="xs" />
            <ProgressBar value={70} gradient color="success" />
            <Spacer size="xs" />
            <ProgressBar value={80} gradient color="warning" />
            <Spacer size="xs" />
            <ProgressBar value={90} gradient color="error" />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              Gradient with Custom Colors
            </Typography>
            <ProgressBar
              value={65}
              gradient
              gradientColors={["#FF6B6B", "#FFE66D"]}
              showLabel
            />
            <Spacer size="xs" />
            <ProgressBar
              value={75}
              gradient
              gradientColors={["#4ECDC4", "#44A08D"]}
              showLabel
            />
            <Spacer size="xs" />
            <ProgressBar
              value={85}
              gradient
              gradientColors={["#A8E6CF", "#FFD3B6"]}
              showLabel
            />
          </View>
          <View style={styles.progressItem}>
            <Typography variant="caption" color="textTertiary">
              Gradient Indeterminate
            </Typography>
            <ProgressBar variant="indeterminate" gradient color="primary" />
            <Spacer size="xs" />
            <ProgressBar variant="indeterminate" gradient color="secondary" />
            <Spacer size="xs" />
            <ProgressBar variant="indeterminate" gradient color="success" />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Spacer
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Spacing utilities:
        </Typography>
        <View style={styles.componentContainer}>
          <View
            style={[
              styles.spacerDemo,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.spacerBox} />
            <Spacer size="xs" />
            <View style={styles.spacerBox} />
            <Spacer size="sm" />
            <View style={styles.spacerBox} />
            <Spacer size="md" />
            <View style={styles.spacerBox} />
            <Spacer size="lg" />
            <View style={styles.spacerBox} />
          </View>
          <View
            style={[
              styles.spacerHorizontalDemo,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View style={styles.spacerBoxHorizontal} />
            <Spacer orientation="horizontal" size="md" />
            <View style={styles.spacerBoxHorizontal} />
            <Spacer orientation="horizontal" size="lg" />
            <View style={styles.spacerBoxHorizontal} />
          </View>
          <View style={styles.spacerSizesDemo}>
            {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
              <View key={size} style={styles.spacerSizeItem}>
                <Typography variant="caption" color="textTertiary">
                  {size}:
                </Typography>
                <View style={styles.spacerBox} />
                <Spacer size={size} />
                <View style={styles.spacerBox} />
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Avatar
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Avatar sizes:
        </Typography>
        <View style={styles.componentContainer}>
          <View style={styles.avatarRow}>
            {(["sm", "md", "lg", "xl"] as const).map((size) => (
              <View key={size} style={styles.avatarItem}>
                <Typography variant="caption" color="textTertiary">
                  {size}:
                </Typography>
                <Avatar name="John Doe" size={size} />
              </View>
            ))}
          </View>
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Fallback types:
        </Typography>
        <View style={styles.componentContainer}>
          <View style={styles.avatarRow}>
            <View style={styles.avatarItem}>
              <Typography variant="caption" color="textTertiary">
                Initials:
              </Typography>
              <Avatar name="John Doe" fallback="initials" />
            </View>
            <View style={styles.avatarItem}>
              <Typography variant="caption" color="textTertiary">
                Icon:
              </Typography>
              <Avatar fallback="icon" />
            </View>
            <View style={styles.avatarItem}>
              <Typography variant="caption" color="textTertiary">
                Placeholder:
              </Typography>
              <Avatar fallback="placeholder" />
            </View>
          </View>
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Status indicators:
        </Typography>
        <View style={styles.componentContainer}>
          <View style={styles.avatarRow}>
            {(["online", "offline", "away", "busy"] as const).map((status) => (
              <View key={status} style={styles.avatarItem}>
                <Typography variant="caption" color="textTertiary">
                  {status}:
                </Typography>
                <Avatar name="John Doe" status={status} />
              </View>
            ))}
          </View>
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          With borders:
        </Typography>
        <View style={styles.componentContainer}>
          <View style={styles.avatarRow}>
            <View style={styles.avatarItem}>
              <Typography variant="caption" color="textTertiary">
                Default:
              </Typography>
              <Avatar name="John Doe" borderWidth={2} />
            </View>
            <View style={styles.avatarItem}>
              <Typography variant="caption" color="textTertiary">
                Primary:
              </Typography>
              <Avatar name="John Doe" borderColor="primary" borderWidth={3} />
            </View>
            <View style={styles.avatarItem}>
              <Typography variant="caption" color="textTertiary">
                Custom:
              </Typography>
              <Avatar name="John Doe" borderColor="#FF5722" borderWidth={2} />
            </View>
          </View>
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Different names:
        </Typography>
        <View style={styles.componentContainer}>
          <View style={styles.avatarRow}>
            {["John Doe", "Jane Smith", "Alice", "Bob Johnson"].map((name) => (
              <View key={name} style={styles.avatarItem}>
                <Typography variant="caption" color="textTertiary">
                  {name}:
                </Typography>
                <Avatar name={name} />
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          Card
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Card variants:
        </Typography>
        <View style={styles.componentContainer}>
          <Card variant="default" headerTitle="Default Card">
            <Typography variant="body" color="text">
              Default variant with surface background
            </Typography>
          </Card>
          <Card variant="outlined" headerTitle="Outlined Card">
            <Typography variant="body" color="text">
              Outlined variant with border
            </Typography>
          </Card>
          <Card variant="elevated" elevation={4} headerTitle="Elevated Card">
            <Typography variant="body" color="text">
              Elevated variant with shadow/elevation
            </Typography>
          </Card>
          <Card variant="liquidGlass" headerTitle="Liquid Glass Card">
            <Typography variant="body" color="text">
              Liquid Glass variant with blur and gradient effects
            </Typography>
          </Card>
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          With header and subtitle:
        </Typography>
        <View style={styles.componentContainer}>
          <Card headerTitle="Card Title" headerSubtitle="This is a subtitle">
            <Typography variant="body" color="text">
              Card with title and subtitle in header
            </Typography>
          </Card>
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          With image:
        </Typography>
        <View style={styles.componentContainer}>
          <Card
            headerTitle="Beautiful Image"
            image={require("../../assets/images/react-logo.png")}
          >
            <Typography variant="body" color="text">
              Card with image at the top
            </Typography>
          </Card>
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          With footer:
        </Typography>
        <View style={styles.componentContainer}>
          <Card
            headerTitle="Card with Footer"
            footer={
              <Typography variant="caption" color="textTertiary">
                Footer content
              </Typography>
            }
          >
            <Typography variant="body" color="text">
              Card content here
            </Typography>
          </Card>
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          With footer actions:
        </Typography>
        <View style={styles.componentContainer}>
          <Card
            headerTitle="Card with Actions"
            footerActions={
              <>
                <Button variant="ghost" size="sm" onPress={() => {}}>
                  Cancel
                </Button>
                <Button variant="primary" size="sm" onPress={() => {}}>
                  Accept
                </Button>
              </>
            }
          >
            <Typography variant="body" color="text">
              Card with action buttons in footer
            </Typography>
          </Card>
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Clickable card:
        </Typography>
        <View style={styles.componentContainer}>
          <Card clickable onPress={() => {}} headerTitle="Clickable Card">
            <Typography variant="body" color="text">
              Tap this card to trigger onPress
            </Typography>
          </Card>
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Elevation levels:
        </Typography>
        <View style={styles.componentContainer}>
          {[0, 2, 4, 8, 16, 24].map((elevation) => (
            <Card
              key={elevation}
              variant="elevated"
              elevation={elevation}
              headerTitle={`Elevation ${elevation}`}
            >
              <Typography variant="body" color="text">
                Card with elevation level {elevation}
              </Typography>
            </Card>
          ))}
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Padding sizes:
        </Typography>
        <View style={styles.componentContainer}>
          {(["xs", "sm", "md", "lg"] as const).map((padding) => (
            <Card
              key={padding}
              headerTitle={`Padding: ${padding}`}
              padding={padding}
            >
              <Typography variant="body" color="text">
                Card with {padding} padding
              </Typography>
            </Card>
          ))}
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Complete example:
        </Typography>
        <View style={styles.componentContainer}>
          <Card
            variant="elevated"
            elevation={4}
            image={require("../../assets/images/react-logo.png")}
            headerTitle="Complete Card Example"
            headerSubtitle="With all features"
            footerActions={
              <>
                <Button variant="ghost" size="sm" onPress={() => {}}>
                  Share
                </Button>
                <Button variant="primary" size="sm" onPress={() => {}}>
                  Learn More
                </Button>
              </>
            }
          >
            <Typography variant="body" color="text">
              This is a complete card example with image, header, subtitle, body
              content, and footer actions.
            </Typography>
          </Card>
        </View>
      </View>

      <View style={styles.section}>
        <Typography variant="h3" color="text">
          TextInput
        </Typography>
        <Typography variant="bodySmall" color="textSecondary">
          Input variants:
        </Typography>
        <View style={styles.componentContainer}>
          <TextInput
            variant="default"
            label="Default Variant"
            placeholder="Default input"
            value={textInput1}
            onChangeText={setTextInput1}
          />
          <TextInput
            variant="outlined"
            label="Outlined Variant"
            placeholder="Outlined input"
            value={textInput2}
            onChangeText={setTextInput2}
          />
          <TextInput
            variant="filled"
            label="Filled Variant"
            placeholder="Filled input"
            value={textInput3}
            onChangeText={setTextInput3}
          />
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Sizes:
        </Typography>
        <View style={styles.componentContainer}>
          <TextInput
            size="sm"
            label="Small"
            placeholder="Small input"
            value={textInput4}
            onChangeText={setTextInput4}
          />
          <TextInput
            size="md"
            label="Medium"
            placeholder="Medium input"
            value={textInput5}
            onChangeText={setTextInput5}
          />
          <TextInput
            size="lg"
            label="Large"
            placeholder="Large input"
            value={textInput6}
            onChangeText={setTextInput6}
          />
          <TextInput
            size="xl"
            label="Extra Large (Description)"
            placeholder="Enter description..."
            value={textInput15}
            onChangeText={setTextInput15}
            maxLength={200}
            showCounter
          />
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          With icons:
        </Typography>
        <View style={styles.componentContainer}>
          <TextInput
            label="With Left Icon"
            placeholder="Search..."
            value={textInput7}
            onChangeText={setTextInput7}
            leftIcon={
              <Ionicons
                name="search"
                size={20}
                color={theme.colors.textTertiary}
              />
            }
          />
          <TextInput
            label="With Right Icon"
            placeholder="Enter email"
            value={textInput8}
            onChangeText={setTextInput8}
            rightIcon={
              <Ionicons
                name="mail"
                size={20}
                color={theme.colors.textTertiary}
              />
            }
          />
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Clearable and password:
        </Typography>
        <View style={styles.componentContainer}>
          <TextInput
            label="Clearable Input"
            placeholder="Type to see clear button"
            value={textInput9}
            onChangeText={setTextInput9}
            clearable
          />
          <TextInput
            label="Password"
            placeholder="Enter password"
            value={textInput10}
            onChangeText={setTextInput10}
            secureTextEntry
            showPasswordToggle
          />
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Error and helper text:
        </Typography>
        <View style={styles.componentContainer}>
          <TextInput
            label="Email"
            placeholder="Enter email"
            value={textInput11}
            onChangeText={setTextInput11}
            error="Please enter a valid email address"
          />
          <TextInput
            label="Username"
            placeholder="Enter username"
            value={textInput12}
            onChangeText={setTextInput12}
            helperText="Username must be at least 3 characters"
          />
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Character counter and multiline:
        </Typography>
        <View style={styles.componentContainer}>
          <TextInput
            label="Bio"
            placeholder="Tell us about yourself"
            value={textInput13}
            onChangeText={setTextInput13}
            maxLength={100}
            showCounter
            multiline
            numberOfLines={4}
          />
          <TextInput
            label="Message"
            placeholder="Enter your message"
            value={textInput14}
            onChangeText={setTextInput14}
            multiline
            numberOfLines={4}
          />
        </View>
        <Typography
          variant="bodySmall"
          color="textSecondary"
          style={styles.subsectionTitle}
        >
          Disabled state:
        </Typography>
        <View style={styles.componentContainer}>
          <TextInput
            label="Disabled Input"
            placeholder="Cannot edit"
            value="Disabled value"
            editable={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 24,
    paddingBottom: 40,
  },
  header: {
    gap: 8,
    marginTop: 40,
  },
  section: {
    gap: 12,
  },
  typographyContainer: {
    gap: 12,
    marginTop: 8,
  },
  typographyItem: {
    gap: 4,
  },
  languageContainer: {
    gap: 12,
    marginTop: 8,
  },
  languageItem: {
    gap: 4,
    padding: 12,
    borderRadius: 8,
  },
  unsupportedContainer: {
    gap: 4,
  },
  note: {
    marginTop: 12,
    fontStyle: "italic",
  },
  fontComparisonContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
  },
  fontComparisonColumn: {
    flex: 1,
    gap: 12,
    padding: 12,
    borderRadius: 8,
  },
  button: {
    marginTop: 8,
  },
  buttonGroup: {
    gap: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonItem: {
    marginRight: 8,
    marginBottom: 8,
  },
  combinationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  variantLabel: {
    fontSize: 14,
    fontWeight: "500",
    width: 80,
    textTransform: "capitalize",
  },
  combinationButtons: {
    flexDirection: "row",
    flex: 1,
    gap: 8,
  },
  combinationButton: {
    flex: 1,
  },
  componentContainer: {
    gap: 16,
    marginTop: 8,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  badgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  badgeOverlayContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: 8,
  },
  chipRow: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  progressItem: {
    gap: 8,
    width: "100%",
  },
  spacerDemo: {
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  spacerBox: {
    width: 40,
    height: 40,
    backgroundColor: "#1976D2",
    borderRadius: 8,
  },
  spacerHorizontalDemo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  spacerBoxHorizontal: {
    width: 40,
    height: 40,
    backgroundColor: "#1976D2",
    borderRadius: 8,
  },
  spacerSizesDemo: {
    gap: 12,
  },
  spacerSizeItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  subsectionTitle: {
    marginTop: 16,
    marginBottom: 8,
  },
  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
  },
  avatarItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
