---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Government System
## Config file


For both QBCore and ESX :

```lua
--
-- WELCOME !
-- First of all, thank you for using my script. I hope you will enjoy it.
-- This is a configuration file, you can modify some parts of the script here.
--
-- It is important to read the comments to understand what you are doing and what you can do.
--

-- To modify the loaded translation file, please go to the 'fxmanifest.lua' file and modify the 'languages/english.lua' file to the language you want to use.

Config = {}

-- Set this variable to true if you want to enable debug mode (for developers and support)
Config.DebugMode = true

-- Framework settings
Config.Framework = {
    -- If you use ESX, you need to set this to 'ESX'
    -- If you use QBCore, you need to set this to 'QBCore'
    FrameworkName = "QBCore",
    -- The name of the QBCore resource, this is only used if you use QBCore
    QBCoreFileName = "qb-core",
    -- Set to true if you use the old ESX (not ESX Legacy)
    OldESX = false,
    -- If you use the old ESX, define the event name here to get the ESX object (by default it's 'esx:getSharedObject')
    ESXEvent = "esx:getSharedObject",
    -- The name of the ESX resource, this is only used if you use ESX
    ESXFileName = "es_extended"
}

-- Scripts names for the exports
Config.ExportNames = {
    s1nLib = "s1n_lib",
    
    oxTarget = "ox_target",
    qbTarget = "qb-target",
    qbBanking = "qb-banking",
    qbManagement = "qb-management",
}

-- Dependencies settings
Config.Dependencies = {
    -- You need to set to true which target script you are using
    oxTarget = true,
    qbTarget = false,

    -- You need to set to true if you use qb-management (for handling the accounts money)
    qbManagement = true,
}

-- Events names used (ONLY change it if you know what you are doing)
Config.Events = {
    qbManagement = {
        removeAccountMoney = "qb-bossmenu:server:removeAccountMoney"
    },

    esxAddonAccount = {
        getSharedAccount = "esx_addonaccount:getSharedAccount"
    },
}

-- Set the interval in minutes to check for business tax due and remove it from the society account
Config.IntervalBusinessTaxCheck = 10

-- These are the groups that have access to the commands
Config.AdminGroups = {
    -- Example:
    --
    -- Only modify "groupName" by the name of the group you want to give access to the commands
    -- ["groupName"] = true,

    ["admin"] = true,
    ["god"] = true,
}

-- These are the peds that will be created
Config.Peds = {
    -- Here are all the features that you can use in the 'features' table
    -- ["TaxationSystem"] = true,
    -- ["AppointmentSystem"] = true,
    -- ["EnterpriseManagement"] = true,
    -- ["AnnouncementSystem"] = true,
    -- ["DefconManagement"] = true,
    -- ["FundsSystem"] = true,
    -- ["AppointmentSystemNormal"] = true,
    -- ["VotingSystem"] = true,

    {
        -- Set this to true if you want to make this ped only available to the government job
        jobOnly = true,
        -- The model of the ped
        model = "a_m_m_business_01",
        -- The coordinates of the ped
        coords = vector4(1706.21, 3790.58, 34.77 - 1, 106.69),
        -- The features of the ped
        features = {
            ["TaxationSystem"] = true,
            ["AppointmentSystem"] = true,
            ["EnterpriseManagement"] = true,
            ["AnnouncementSystem"] = true,
            ["DefconManagement"] = true,
            ["FundsSystem"] = true
        }
    },
    {
        -- Set this to true if you want to make this ped only available to the government job
        jobOnly = false,
        -- The model of the ped
        model = "a_m_m_business_01",
        -- The coordinates of the ped
        coords = vector4(1698.81, 3784.57, 34.77 - 1, 211.1),
        -- The features of the ped
        features = {
            ["AppointmentSystemNormal"] = true,
        }
    },
    {
        -- Set this to true if you want to make this ped only available to the government job
        jobOnly = false,
        -- The model of the ped
        model = "a_m_m_business_01",
        -- The coordinates of the ped
        coords = vector4(1700.22, 3785.53, 34.77 - 1, 219.66),
        -- The features of the ped
        features = {
            ["VotingSystem"] = true,
        }
    }
}

-- These are the grades that you can use in the government job
-- They will be automatically added to the database, no need to add them manually
-- You can add as many grades as you want
Config.Grades = {
    ["1"] = {
        -- The name of the grade
        name = "Governor",
        -- The features that the grade has access to
        access = {
            ["TaxationSystem"] = true,
            ["AppointmentSystem"] = true,
            ["EnterpriseManagement"] = true,
            ["AnnouncementSystem"] = true,
            ["DefconManagement"] = true,
            ["FundsSystem"] = true,
        },
        -- The salary of the grade
        salary = 500
    },
    ["2"] = {
        -- The name of the grade
        name = "Secretary of State",
        -- The features that the grade has access to
        access = {
            ["AppointmentSystem"] = true,
            ["AnnouncementSystem"] = true,
        },
        -- The salary of the grade
        salary = 500
    },
    ["3"] = {
        -- The name of the grade
        name = "Treasurer",
        -- The features that the grade has access to
        access = {
            ["TaxationSystem"] = true,
            ["FundsSystem"] = true,
        },
        -- The salary of the grade
        salary = 500
    },
    ["4"] = {
        -- The name of the grade
        name = "Government Agent",
        -- The features that the grade has access to
        access = {},
        -- The salary of the grade
        salary = 500
    }
}

-- Settings for the automatic voting system
-- The automatic voting system is a system that allows players to vote for a candidate.
-- <!> This system doesn't persist between script/server restarts. If this feature is already planned, it will be added in a future update.
Config.Voting = {
    -- Set this to true if you want to enable the automatic voting system
    enabled = false,

    -- If set this to false, people already in the government job can't present themselves
    presentEvenIfHasGovernmentJob = true,

    -- The durations of the voting system for each grade ID from Config.Grades
    durations = {
        -- The ID of the grade from Config.Grades
        ["1"] = {
            -- Sets the time duration for presenting oneself as the rank associated with the ID
            present = 10,
            -- Sets the time duration for voting for the rank associated with the ID
            voting = 10,
            -- Set this to true if you want to enable the draw system (meaning that if there is a draw, the voting will be extended)
            draw = false
        },
        -- The ID of the grade from Config.Grades
        ["2"] = {
            -- Sets the time duration for presenting oneself as the rank associated with the ID
            present = 10,
            -- Sets the time duration for voting for the rank associated with the ID
            voting = 10,
            -- Set this to true if you want to enable the draw system (meaning that if there is a draw, the voting will be extended)
            draw = false
        },
        -- The ID of the grade from Config.Grades
        ["3"] = {
            -- Sets the time duration for presenting oneself as the rank associated with the ID
            present = 10,
            -- Sets the time duration for voting for the rank associated with the ID
            voting = 10,
            -- Set this to true if you want to enable the draw system (meaning that if there is a draw, the voting will be extended)
            draw = false
        },
        -- The ID of the grade from Config.Grades
        ["4"] = {
            -- Sets the time duration for presenting oneself as the rank associated with the ID
            present = 10,
            -- Sets the time duration for voting for the rank associated with the ID
            voting = 10,
            -- Set this to true if you want to enable the draw system (meaning that if there is a draw, the voting will be extended)
            draw = false
        }
    }
}
```
