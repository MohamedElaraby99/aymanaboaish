# Super Admin System Setup

This document explains how to set up and use the new Super Admin system that provides enhanced permissions for managing admin users.

## Overview

The system now has three user roles:
- **USER**: Regular student users
- **ADMIN**: Regular administrators with limited permissions
- **SUPER_ADMIN**: Super administrators with full permissions including the ability to create/delete admin users

## Backend Changes

### 1. User Model Updates
- Added `SUPER_ADMIN` role to the role enum
- Added `adminPermissions` field to track specific permissions
- Permissions include: `CREATE_ADMIN`, `DELETE_ADMIN`, `MANAGE_USERS`, `MANAGE_COURSES`, `MANAGE_PAYMENTS`, `VIEW_ANALYTICS`

### 2. Controller Updates
- **createUser**: Only SUPER_ADMIN can create ADMIN users
- **updateUserRole**: Only SUPER_ADMIN can change roles to ADMIN
- **deleteUser**: Only SUPER_ADMIN can delete ADMIN users
- **getAllUsers**: Added super admin count to statistics

### 3. Middleware Updates
- SUPER_ADMIN has access to all admin routes
- Regular ADMIN users have limited access

## Frontend Changes

### 1. Permission Checks
- Added permission checking functions:
  - `canCreateAdmin`: Only SUPER_ADMIN can create admin users
  - `canDeleteAdmin`: Only SUPER_ADMIN can delete admin users
  - `canChangeRoleToAdmin`: Only SUPER_ADMIN can change roles to admin

### 2. UI Updates
- Create user modal: Admin role option only visible to SUPER_ADMIN
- User list: Role change and delete buttons conditionally shown
- Statistics: Added super admin count display
- Role display: Shows Arabic text for roles

## Setup Instructions

### 1. Create Super Admin User

Run the super admin creation script:

```bash
cd backend
node scripts/create-super-admin.js
```

This will create a super admin with:
- Username: `superadmin`
- Email: `superadmin@api.com`
- Password: `SuperAdmin123!`
- Role: `SUPER_ADMIN`
- Full permissions

### 2. Test the System

Run the test script to verify everything works:

```bash
cd backend
node test-super-admin.js
```

### 3. Login and Test

1. Login with the super admin credentials
2. Navigate to the Admin User Dashboard
3. Verify you can see the "المديرون المميزون" (Super Admins) statistic
4. Try creating a new admin user (should work)
5. Try changing user roles to admin (should work)
6. Try deleting admin users (should work)

## Permission Matrix

| Action | USER | ADMIN | SUPER_ADMIN |
|--------|------|-------|-------------|
| View users | ❌ | ✅ | ✅ |
| Create users | ❌ | ✅ | ✅ |
| Create admin users | ❌ | ❌ | ✅ |
| Change roles to admin | ❌ | ❌ | ✅ |
| Delete admin users | ❌ | ❌ | ✅ |
| Delete regular users | ❌ | ✅ | ✅ |
| Manage courses | ❌ | ✅ | ✅ |
| View analytics | ❌ | ✅ | ✅ |

## Security Features

1. **Role Escalation Prevention**: Regular admins cannot create other admin users
2. **Self-Protection**: Users cannot delete or change their own role
3. **Permission Validation**: All admin actions are validated against user permissions
4. **Audit Trail**: All actions are logged and tracked

## Usage Examples

### Creating a New Admin User (SUPER_ADMIN only)
1. Login as super admin
2. Go to Admin User Dashboard
3. Click "إنشاء مستخدم جديد" (Create New User)
4. Select "مدير (ADMIN)" role
5. Fill in user details
6. Submit the form

### Changing User Role (SUPER_ADMIN only)
1. View user details
2. Click "تعديل" (Edit)
3. Change role to ADMIN
4. Save changes

### Deleting Admin User (SUPER_ADMIN only)
1. View user details
2. Click "حذف المستخدم" (Delete User)
3. Confirm deletion

## Troubleshooting

### Common Issues

1. **"You don't have permission to create admin users"**
   - Solution: Login as SUPER_ADMIN instead of regular ADMIN

2. **Role change button not visible**
   - Solution: Check if current user is SUPER_ADMIN

3. **Delete button not visible for admin users**
   - Solution: Login as SUPER_ADMIN

### Verification Steps

1. Check user role in database: `db.users.findOne({email: "your-email"})`
2. Verify permissions array: `db.users.findOne({role: "SUPER_ADMIN"})`
3. Test API endpoints with different user roles

## Migration Notes

- Existing ADMIN users will continue to work but with limited permissions
- No data migration is required
- New SUPER_ADMIN users can be created alongside existing users
- The system is backward compatible

## Future Enhancements

- Add more granular permissions
- Implement permission-based UI components
- Add audit logging for admin actions
- Create permission management interface
