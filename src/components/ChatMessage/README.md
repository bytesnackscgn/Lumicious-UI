# LChatMessage

A beautiful chat message component designed for messaging applications with glassmorphism styling and status indicators.

## Props

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `content` | `string` | Required | The message content to display |
| `variant` | `'sent' \| 'received'` | `'received'` | Message direction (sent by user or received) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the message |
| `timestamp` | `string \| Date` | `undefined` | Message timestamp |
| `avatar` | `string` | `undefined` | Avatar image URL |
| `username` | `string` | `undefined` | Username for display |
| `status` | `'sent' \| 'delivered' \| 'read' \| 'failed'` | `'sent'` | Message delivery status |
| `loading` | `boolean` | `false` | Show loading state |
| `showAvatar` | `boolean` | `true` | Show avatar image |
| `showTimestamp` | `boolean` | `true` | Show timestamp |
| `showStatus` | `boolean` | `true` | Show delivery status |

## Events

| Name | Parameters | Description |
| :--- | :--- | :--- |
| `click` | `(event: MouseEvent)` | Emitted when message is clicked |

## Slots

- `default`: Override the message content

## Usage

### Basic Usage

```vue
<template>
  <div class="chat-container">
    <!-- Received message -->
    <LChatMessage 
      content="Hello! How are you?"
      variant="received"
      username="Alice"
      avatar="https://via.placeholder.com/40x40?text=A"
    />
    
    <!-- Sent message -->
    <LChatMessage 
      content="I'm doing great, thanks!"
      variant="sent"
      status="read"
    />
  </div>
</template>
```

### With Custom Content

```vue
<template>
  <LChatMessage 
    variant="received"
    username="Bob"
    avatar="https://via.placeholder.com/40x40?text=B"
  >
    <div class="flex flex-col gap-2">
      <p>Check out this image:</p>
      <img src="https://via.placeholder.com/200x100?text=Image" alt="Shared image" />
      <p>What do you think?</p>
    </div>
  </LChatMessage>
</template>
```

### Loading State

```vue
<template>
  <LChatMessage 
    variant="sent"
    content="Sending message..."
    :loading="true"
  />
</template>
```

### Different Sizes

```vue
<template>
  <div class="space-y-4">
    <LChatMessage size="sm" content="Small message" variant="received" />
    <LChatMessage size="md" content="Medium message" variant="received" />
    <LChatMessage size="lg" content="Large message" variant="received" />
  </div>
</template>
```

### Status Variants

```vue
<template>
  <div class="space-y-4">
    <LChatMessage 
      variant="sent" 
      content="Sent message" 
      status="sent"
    />
    <LChatMessage 
      variant="sent" 
      content="Delivered message" 
      status="delivered"
    />
    <LChatMessage 
      variant="sent" 
      content="Read message" 
      status="read"
    />
    <LChatMessage 
      variant="sent" 
      content="Failed message" 
      status="failed"
    />
  </div>
</template>
```

### Custom Timestamp

```vue
<template>
  <LChatMessage 
    content="This message has a custom timestamp"
    variant="received"
    :timestamp="new Date('2024-01-15T10:30:00')"
  />
</template>
```

### Hide Elements

```vue
<template>
  <div class="space-y-4">
    <LChatMessage 
      content="No avatar"
      variant="received"
      :show-avatar="false"
    />
    <LChatMessage 
      content="No timestamp"
      variant="received"
      :show-timestamp="false"
    />
    <LChatMessage 
      content="No status"
      variant="sent"
      :show-status="false"
    />
  </div>
</template>
```

## Styling

The component uses glassmorphism styling with:

- **Glass background**: Semi-transparent with backdrop blur
- **Borders**: Subtle white borders for definition
- **Status indicators**: Icons showing message delivery status
- **Responsive design**: Adapts to different screen sizes

## Timestamp Format

The component automatically formats timestamps:

- **< 1 minute**: "just now"
- **< 60 minutes**: "Xm ago"
- **< 24 hours**: "Xh ago"
- **< 7 days**: "Xd ago"
- **≥ 7 days**: Full date with time

## Status Icons

- **Sent**: Send icon (paper plane)
- **Delivered**: Check icon (single check)
- **Read**: Double check icon (two checks)
- **Failed**: X circle icon (error)

## Accessibility

- Clickable messages emit click events
- Semantic HTML structure
- Proper contrast ratios for text
- Screen reader friendly with appropriate ARIA labels